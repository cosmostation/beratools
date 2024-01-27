import { Button, Stack, Typography } from "@mui/joy";
import { useAccount, useConnect, useDisconnect } from "wagmi";

import { ellipsisAddress } from "@/utils/strings";

export const Account = () => {
  const account = useAccount();

  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <Typography>{ellipsisAddress(account.address)}</Typography>
      <Typography>
        {account.status === "connected" ? (
          <Button onClick={() => disconnect()}>Disconnect</Button>
        ) : (
          connectors.map((connector) => (
            <Button key={connector.uid} onClick={() => connect({ connector })}>
              {connector.name}
            </Button>
          ))
        )}
      </Typography>
    </Stack>
  );
};
