/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.28",
  networks: {
    holesky: {
      url: "https://holesky.infura.io/v3/ef32ca39802242d69b586f48e24ee92c", 
      chainId: 17000, 
      accounts: ["0xbb20230d3071c2b37b2b619a58d13cc6b94a032462f82fa723468913d31691d3"],
    },
  },
};
