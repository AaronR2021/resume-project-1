
import {ethers} from 'ethers';

// !Use provider to connect to metamask
// !Send a request to metamask to connect Dapp to it
export async function connectToMetamask(setCurrentAccount,setBallance,provider,setError,setConnect){
    try{
        setCurrentAccount(null); //reset address
        setBallance(null);       //reset ballance
        if(window.ethereum){
          await provider.send("eth_requestAccounts", [])//sends request to metamask to connect
          .then(()=>getAccountInfo(provider.getSigner(),setBallance,setCurrentAccount,setConnect));//sends the information of the connected account
        }else{
          setError("Please Install metamask");
        }
    }catch(e){
        setError(e);
    }
    }

//! Get info of the connected account
export const getAccountInfo=async(signerObject,setBallance,setCurrentAccount,setConnect)=>{
    try{
        const address =await signerObject.getAddress();
        const balance =ethers.utils.formatEther(await signerObject.getBalance());
        setCurrentAccount(address);
        setBallance(balance);
        setConnect(true)
    }catch(e){
        setError(e);
    }
}