"use client"; // this is a client page

import React,{useState,useEffect} from "react";
import {ethers} from 'ethers';

import Web3Modal from 'web3modal';
import Image from "next/image";

import ImagePlaceHolder from '../../public/ape.png'
import ImageLogo from '../../public/logo.png'

export default function Home() {

  const INFURA_ID=process.env.NEXT_PUBLIC_INFURA_ID;
  //provider is an entry point to the blockchain, you can use this or metamask to connect to the blockchain
  const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`);

    //! The account connected
    const [currentAccount, setCurrentAccount]=useState('');
    //! Is metamask connected to your site
    const [connect, setConnect]=useState(false);
    //! What is the balance of the account that is connected to the site
    const [ballance, setBallance]=useState('');


  return (<>

 //TODO: Create a provider that connects to metamask

 //TODO: Detect if the metamask account is connected if not, connect it to the Dapp

 //TODO: Detect if there is a change in account connected to dapp via metamask

 //TODO: Change accounts if there is a change in metamask primary account

 //TODO: different UI if connected?connected:notConnected

 //TODO: Connect with button

 //TODO: See if you can disconnect via website

 //TODO: Display current Account address

 //TODO: Display current Account Balance

 //TODO: Display current Account ENS name if present

 //TODO: Display current Account Image if present
  
  </>)
}
