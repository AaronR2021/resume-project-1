"use client"; // this is a client page

import React,{useState,useEffect} from "react";
import {ethers} from 'ethers';

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

 //TODO: transfer funds with message
 //*URL: https://www.youtube.com/watch?v=NdJLDId0n-0&list=PLWUCKsxdKl0pHb0Ce9pA_iUg-UstwGPp2&index=25
  
  </>)
}
