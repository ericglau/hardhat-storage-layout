import { ethers, upgrades } from "hardhat";

describe("Contract", function () {
  it("Test upgrade safety", async function () {
    const V1 = await ethers.getContractFactory("contracts/V1.sol:MyContract"); // rename MyContract to the actual contract name from V1.sol
    const V2 = await ethers.getContractFactory("contracts/V2.sol:MyContract"); // rename MyContract to the actual contract name from V2.sol
    await upgrades.validateUpgrade(V1, V2);
  });
});
