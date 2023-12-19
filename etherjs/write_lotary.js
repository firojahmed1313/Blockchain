const { ethers } = require("ethers");
const lotary = require("./lotary.json");

const RPC = "https://eth-sepolia.g.alchemy.com/v2/eDAgPHUJjzsNdoEAmzT_qTN5X_dxBMq-";
const account = "0x2e195a3684703EBc60C18F1B66EDABF3c7a183a4";
const PrivetKey = "9c77adff925b44b87fa38f297cfbdb19798da6bf1b0c0292f83caf668b92b15c";

const provider = new ethers.JsonRpcProvider(
    RPC
)
const wallet = new ethers.Wallet(PrivetKey, provider);

const deplyAddress="0xada08422fd32D0207904b6D3D840A953a170BdB1";
const ABI= lotary.abi;
async function call() {

    const contract = new ethers.Contract(
        deplyAddress,
        ABI,
        wallet
    )
    console.log(ethers.formatEther(await provider.getBalance(account)));
    //console.log(await wallet.getBalance);
    //console.log( await wallet.getBalance);
    console.log(await contract.playerName());
    console.log(await provider.getBalance(wallet.address)); // Use provider for wallet balance
    console.log(await wallet.getTransactionCount());

}
call();