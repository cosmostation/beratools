import { createConfig, http } from "wagmi";

import { Chain } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const artio: Chain = {
  id: 80085,
  name: "Berachain Artio",
  nativeCurrency: {
    decimals: 18,
    name: "BERA",
    symbol: "BERA",
  },
  rpcUrls: {
    default: {
      http: ["https://artio.rpc.berachain.com/"],
    },
    public: {
      http: ["https://artio.rpc.berachain.com/"],
    },
  },
};

export const config = createConfig({
  chains: [artio],
  connectors: [metaMask()],
  multiInjectedProviderDiscovery: false,
  transports: {
    [artio.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
