require("@nomicfoundation/hardhat-toolbox");
import 'dotenv/config'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    testnet: {
      url: process.env.URL,
      accounts: [process.env.ACCOUNTS],
    }
  }
};

