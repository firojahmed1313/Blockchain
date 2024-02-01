const hre = require("hardhat");
const { ethers } = require("hardhat");
const { parseEther } = require("@ethersproject/units");

async function main() {
  // Deploy the Funding contract
  const Funding = await ethers.getContractFactory("funding");
  const fundingDeploy = await Funding.deploy();
  await fundingDeploy.waitForDeployment();
  
  console.log("Funding contract deployed to:", fundingDeploy.target);

  // Get an instance of the deployed contract
  const funding = await ethers.getContractAt("funding", fundingDeploy.target);

  // Call the sendMoney function
  const valueToSend = parseEther("1").toString();
  /*const transaction = await funding.sendMoney("firoj", "test massage", {
    value: valueToSend,
  });

  // Wait for the transaction to be mined
  await transaction.wait();*/

  const alldata= await funding.getData();

  //await alldata.wait();

  console.log(alldata);

  //console.log("sendMoney function called successfully!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
