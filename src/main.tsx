import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { hardhat, goerli, mainnet, sepolia, polygon, zkSync, optimism, polygonZkEvmTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";

export const { chains, provider } = configureChains(
  [hardhat, goerli, mainnet, sepolia, polygon, zkSync, optimism, polygonZkEvmTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "WalletX Contract Uploader",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
