require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  //console.log(accounts[0]) ;
  for (const account of accounts) {
    const address=await account.address;
    const balence=await account.eth_getBalance;
    console.log(address," : " , balence);
  }
});

module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/VPbe3eoKGNUoC9mCcYF-H2tVO3GxK8im",
      accounts: ["9c77adff925b44b87fa38f297cfbdb19798da6bf1b0c0292f83caf668b92b15c"]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
