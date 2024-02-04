import './App.css';
import DisplaySender from './componenent/DisplaySender';
import Paymant from './componenent/Paymant';
import abi from "./contact/funding.json"
import React, { useEffect, useState } from 'react'
const ethers  = require("ethers");

function App() {
  //console.log(abi.abi);
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xec436a40bd5d2eafe3aa118836681fb39aa9363e";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        //console.log(ethereum);
        if (ethereum && ethereum.request) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
  
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
  
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
  
          if (account && account.length > 0) {
            setAccount(account[0]);
            //const provider = new ethers.providers.Web3Provider(ethereum);
            const provider = new ethers.BrowserProvider(ethereum)
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
  
            setState({ provider, signer, contract });
          }
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.warn(error);
      }
    };
  
    connectWallet();
  }, []);
  
    console.log(state);
    console.log(account);

  return (
    <>
      <h1>firoj</h1>
      <Paymant state={state} />
      <DisplaySender state={state} />
      
    </>
  );
}

export default App;
