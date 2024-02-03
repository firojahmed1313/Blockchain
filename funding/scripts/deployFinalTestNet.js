const hre = require("hardhat");




async function main() {
    const Funding = await hre.ethers.getContractFactory("funding");
    const fundingDeploy= await Funding.deploy();
    await fundingDeploy.waitForDeployment();
    console.log(fundingDeploy.target);

}  



main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });