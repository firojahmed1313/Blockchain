const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  const {ethers} = require("hardhat");
  
  
  describe("CarPool", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    test('',async()=>{
        const CarPool = await ethers.getContractFactory("CarpoolingSystem");
        const carPool= await CarPool.deploy();
        await carPool.deployed();
    })
  
  });
  