
const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = "0x84022756071ffbdBF5c0555cd1216751EcfCE96f";

  if (!tokenAddress || tokenAddress === "0xYourTokenAddressHere") {
    throw new Error("Please set the token address before deployment.");
  }
  console.log("Deploying Vault contract...");
  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy(tokenAddress);
  await vault.deployed();

  console.log(`Vault deployed at address: ${vault.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error deploying the contract:", error);
    process.exit(1);
  });
