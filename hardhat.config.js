require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    alfajores: {
    url: "https://alfajores-forno.celo-testnet.org",
    accounts: {
      mnemonic: process.env.MNEMONIC,
    },
    chainId: 44787
   }
  }
};
