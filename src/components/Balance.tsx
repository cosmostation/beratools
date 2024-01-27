import { Box, Stack, Table, Typography } from "@mui/joy";

import { CosmosBalance } from "./CosmosBalance";
import { ErcBalance } from "./ErcBalance";

type IProps = { address: any };
export const Balance = ({ address }: IProps) => {
  const contracts = [
    { name: "BERA" },
    { name: "BGT", address: "0xAcD97aDBa1207dCf27d5C188455BEa8a32E80B8b" },
    { name: "HONEY", address: "0x7EeCA4205fF31f947EdBd49195a7A88E6A91161B" },
    { name: "bHONEY", address: "0xcBe252445D2e91FA528acd1D9A03c42dF17f7c04" },
    { name: "WETH", address: "0x8239FBb3e3D0C2cDFd7888D8aF7701240Ac4DcA4" },
    { name: "WBTC", address: "0x9DAD8A1F64692adeB74ACa26129e0F16897fF4BB" },
  ];
  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        <Typography level="title-lg">EVM Balance</Typography>
        <Table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Denom</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => {
              return (
                <ErcBalance
                  name={contract.name}
                  owner={address}
                  token={contract.address}
                />
              );
            })}
          </tbody>
        </Table>
      </Stack>{" "}
      <Stack spacing={1}>
        <Typography level="title-lg">Cosmos Balance</Typography>
        <Table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Denom</th>
            </tr>
          </thead>
          <tbody>
            <CosmosBalance address={address} />
          </tbody>
        </Table>
      </Stack>
    </Stack>
  );
};
