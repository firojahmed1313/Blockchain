import './App.css';
import {useEffect} from "react"
import { WalletABI, WalletAddtess } from './wallet';
const { ethers } = require("ethers");

function App() {
  const walletAddress= WalletAddtess;
  const walletAbi= WalletABI;
  useEffect(() => {
    const writeContact=async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletAbi, signer);
      await contract.setValue(2);
    }
    writeContact();
    return () => {
      
    }
  }, [])
  
  
  return (
    <>
      <h1>MD FIROJ AHMED</h1>
    </>
  );
}

export default App;
