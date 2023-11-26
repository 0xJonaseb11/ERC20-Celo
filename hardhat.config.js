require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  alfajores: {
    url: "https://alfajores-forno.celo-testnet.org",
    accounts: {
      mnemonic: process.env.MNEMONIC,
      path: "m/44'/52752'/0'/0"
    },
    chainId: 44787
  }
};
