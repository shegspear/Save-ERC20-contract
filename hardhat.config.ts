import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();
import { vars } from "hardhat/config";
const WALLET_KEY = vars.get("WALLET_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    // for testnet
    "lisk-sepolia": {
      url: "https://rpc.sepolia-api.lisk.com/",
      accounts: [WALLET_KEY as string],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
      "lisk-sepolia": "123",
    },
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com/",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};
// token address 0xc4871995b3af6227aAe04ee030120BBAc830A7db
//SaveERC20Module#SaveERC20:
// - From account has been changed from 0x617cd3db0cbf26f323d5b72975c5311343e09115 to 0xfe8ca1261f853330298ff34d0ce07ca0d63ca0ad
export default config;