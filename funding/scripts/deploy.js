// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { ethers } = require("hardhat");
const { parseEther } = require("@ethersproject/units");

async function main() {
  /*const Funding = await ethers.getContractFactory("funding");
  const fundingDeploy= await Funding.deploy();
  await fundingDeploy.waitForDeployment();*/
  const fundingDeploy = await hre.ethers.deployContract("funding");

  console.log(fundingDeploy.target);
  const valueToSend = parseEther("1");
  const data = await fundingDeploy.sendMoney("firoj","test massage" ,{
    value: valueToSend,
  });
  await data.wait();
  console.log(data);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
