"use client"; // this is a client page

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { connectToMetamask, getAccountInfo } from "../functions/index.js";
import Signin from "@/components/Signin.js";
import Signout from "@/components/Signout.js";
import Web3Modal, { Provider } from "web3modal";
import Image from "next/image";
import ImagePlaceHolder from "../../public/ape.png";
import ImageLogo from "../../public/logo.png";

export default function Home() {
  //! The account connected
  const [currentAccount, setCurrentAccount] = useState(null);
  //! Is metamask connected to your site
  const [connect, setConnect] = useState(false);
  //! What is the balance of the account that is connected to the site
  const [ballance, setBallance] = useState(null);
  //! Provider for this application
  const [provider, setProvider] = useState(null);
  //! error
  const [error, setError] = useState("");
  //!state change
  const [state, setState] = useState(false);

  //! If metamask exists, set provider(access point to eth blockchain)
  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3Provider);
    }
  }, [window.ethereum]); //*changes when type of wallet changes

  //! Use provider to connect to metamask
  useEffect(() => {
    if (provider) {
      connectToMetamask(
        setCurrentAccount,
        setBallance,
        provider,
        setError,
        setConnect
      );
    }
  }, [provider]);//* If provider changes connect to metamask

  //! If change in account address detected connecting to dapp via metamask
  window.ethereum.on("accountsChanged", (account) => {
    if (provider) {
      //* If new address is detected
      if (account.length > 0) {
        getAccountInfo(
          provider.getSigner(),
          setBallance,
          setCurrentAccount,
          setConnect
        );//* Update account Info
      } else {
        //* If no address detected => metamask has disconnected
        setConnect(false);
        connectToMetamask(setCurrentAccount, setBallance, provider, setError);
      }
    }
  });

  //TODO: Display current Account ENS name if present
  async function getENSofAddress() {
    //! Supported only on mainnet
 const address = currentAccount;
const ensName = await provider.lookupAddress(address)
const ensAvatarUrl = await provider.getAvatar(ensName)
const ensResolver = await provider.getResolver(ensName)
const twitterHandle = await ensResolver.getText('com.twitter')
console.log(ensAvatarUrl,'ensAvatarUrl')
console.log(ensName,'ensName')
console.log(ensResolver,'ensResolver')
console.log(twitterHandle,'twitterHandle')
  }

  useEffect(() => {
    if (provider) {
     // getENSofAddress();
    }
  }, [currentAccount]);

  return connect ? (
    <Signin address={currentAccount} balance={ballance}/>
  ) : (
    <Signout/>
  );
}

/*
* Setting Provider once is enough as we just need an entry point to connect to the blockchain, 
* but if your user changes the wallet from metamask to something else then we need to change the provider

* eth_requestAccounts: sends a request to *ACCESS* the *USERS* ethereum account

* provider.getSigner(): returns a signer object, this object allows you to sign transactions and intereact with etherium

* window.ethereum.on('accountsChanged',(account)=>{}) //detects if there is any change in address connected to Dapp, if account is [] => not connected
*/
