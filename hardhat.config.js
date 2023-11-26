require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
  },
  networks: {
    hardhat: {},
    alfajores: {
    url: "https://alfajores-forno.celo-testnet.org",
    accounts:[`0X${process.env.MNEMONIC}`],
    chainId: 44787,
   },
  },
};
