//0xd3bfb7accdec6e0b4f47fecbc97e32c6e613d933

const { ethers } = require("ethers");

const RPC = "https://eth-sepolia.g.alchemy.com/v2/eDAgPHUJjzsNdoEAmzT_qTN5X_dxBMq-";
//const provider = new ethers.providers.jsonRpcProvider(RPC);
const provider = new ethers.JsonRpcProvider(RPC)
const WalletAddtess="0xd3bfb7accdec6e0b4f47fecbc97e32c6e613d933";
const WalletABI=[
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractRead=async()=>{
    const contract= new ethers.Contract(WalletAddtess,WalletABI,provider);
    //const contractName = await contract.name();
    //console.log("Contract Name:", contractName);
    // const num = await contract.getValue();
    //console.log("Number Value:", String(num));

  //const contractBalance = await contract.contractBalance();
  //const balethContract = ethers.utils.formatEther(contractBalance);
  //console.log("Contract Balance:", contractBalance);
    
    //const userBalance = await contract.accountBalance("0x2e195a3684703EBc60C18F1B66EDABF3c7a183a4");
    //const balethUser = ethers.utils.formatEther(userBalance);
    //console.log("User Balance:", userBalance);
    /*const weiValue = ethers.BigNumber.from("42");
    const ethValue = ethers.utils.formatEther(weiValue);
    console.log(ethValue);*/
}

contractRead()