"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { WagmiProvider } from "wagmi";

import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { config } from "@/wagmi";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CssVarsProvider disableTransitionOnChange defaultMode="dark">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          {props.children}
        </QueryClientProvider>
      </WagmiProvider>
    </CssVarsProvider>
  );
}
