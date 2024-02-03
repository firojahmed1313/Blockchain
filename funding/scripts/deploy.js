// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
//const { ethers } = require("hardhat");
const { parseEther,formatEther } = require("@ethersproject/units");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return formatEther(balanceBigInt);
}
  

async function cosoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}
async function consoleMemos(allData) {
  for (const data of allData) {
    const timestamp = data.timestamp;
    const name = data.name;
    const from = data.from;
    const message = data.message;
    console.log(
      `At ${timestamp},name ${name},address ${from},message ${message}`
    );
  }
}
async function main() {
  const Funding = await hre.ethers.getContractFactory("funding");
  const fundingDeploy= await Funding.deploy();
  await fundingDeploy.waitForDeployment();
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();//given by hardhat 
  
  //const fundingDeploy = await hre.ethers.deployContract("funding");
  /*const valueToSend = parseEther("2").toString();
  const data = await fundingDeploy.sendMoney("firoj","test massage" ,{
    value: valueToSend,
  });
  await data.wait();
  console.log(data);*/
  console.log(fundingDeploy.target);
  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before buying chai");
  await cosoleBalances(addresses); 
  const amount = { value: parseEther("2").toString() };
  await fundingDeploy.connect(from1).sendMoney("from1", "Very nice chai", amount);
  await fundingDeploy.connect(from2).sendMoney("from2", "Very nice course", amount);
  await fundingDeploy.connect(from3).sendMoney("from3", "Very nice information", amount);
  console.log("After buying chai");
  await cosoleBalances(addresses);

  const allData = await fundingDeploy.getData();
  consoleMemos(allData);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
