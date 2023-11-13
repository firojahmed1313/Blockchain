const { ethers } = require("ethers");
const lotary = require("./lotary.json");

const RPC = "https://eth-sepolia.g.alchemy.com/v2/eDAgPHUJjzsNdoEAmzT_qTN5X_dxBMq-";
const provider = new ethers.JsonRpcProvider(
    RPC
)

const deplyAddress="0xada08422fd32D0207904b6D3D840A953a170BdB1";
const ABI= lotary.abi;
async function call() {

    const contract = new ethers.Contract(
        deplyAddress,
        ABI,
        provider
    )
    console.log(await contract.maneger())
}
call();