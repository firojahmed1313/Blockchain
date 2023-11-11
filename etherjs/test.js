const { ethers } = require("ethers");

const RPC = "https://eth-sepolia.g.alchemy.com/v2/eDAgPHUJjzsNdoEAmzT_qTN5X_dxBMq-";
const account = "0x4c3614dFc22d26055068Fd9De6536663dD1aa240";
const PrivetKey = "9c77adff925b44b87fa38f297cfbdb19798da6bf1b0c0292f83caf668b92b15c";

const provider = new ethers.JsonRpcProvider(
    RPC
)

const wallet = new ethers.Wallet(PrivetKey, provider);

async function call() {
    const bal = await provider.getBalance(account);
    console.log(ethers.formatEther(bal));

    const add = (await wallet.getAddress())
    //console.log(add);
    console.log (await add.balance);
/*
    const trans = await wallet.sendTransaction(
        {
            to: account,
            value: ethers.parseEther("1")
        }
    )
    await trans.wait() ;
    
     const bal2 = await provider.getBalance(account);
     console.log(ethers.formatEther(bal2));
    console.log(trans);*/
}

call();