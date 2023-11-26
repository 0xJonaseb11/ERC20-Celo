require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
  },
  networks: {
    hardhat: {},
    alfajores: {
    url: "https://alfajores-forno.celo-testnet.org",
    accounts:[`0X${process.env.PRIVATE_KEY}`],
    chainId: 44787,
   },
  } 
}  

