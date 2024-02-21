import { Button, Divider, Input, Stack, Table, Typography } from "@mui/joy";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

import BRIBE_ABI from "@/abi/IBribeModule.abi";
import EPOCH_ABI from "@/abi/IEpochModule.abi";
import { ellipsisAddress } from "@/utils/strings";
import { useState } from "react";

const EPOCH_PRECOMPILE_ADDRESS = "0x612Dd8a861161819A4AD8F6f3E2A0567602877c0";
const BRIBE_PRECOMPILE_ADDRESS = "0xFCE07324E0E72E071842374E9997CF65DF990CBC";
export const Bribe = () => {
  const { writeContract, error } = useWriteContract();
  const [startEpoch, setStartEpoch] = useState("");
  const [numBlockProposals, setNumBlockProposals] = useState("100");
  const [coins, setCoins] = useState(
    JSON.stringify([
      {
        amount: "1",
        denom: "ahoney",
      },
    ])
  );
  const account = useAccount();
  const { data: allValidatorBribes }: any = useReadContract({
    address: BRIBE_PRECOMPILE_ADDRESS,
    abi: BRIBE_ABI,
    functionName: "getAllValidatorBribes",
    args: [account.address],
  });
  const { data: currentEpoch }: any = useReadContract({
    address: EPOCH_PRECOMPILE_ADDRESS,
    abi: EPOCH_ABI,
    functionName: "getCurrentEpoch",
    args: ["berachain_epoch_identifier"],
  });

  if (!account.address) {
    return <Typography level="title-md">Please connect wallet.</Typography>;
  }

  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        <Typography level="title-lg">Get All Validator Bribes</Typography>
        <Table>
          <thead>
            <tr>
              <th>Address</th>
              <th>StartEpoch</th>
              <th>NumBlockProposals</th>
              <th>NumBlockProposalsBribed</th>
              <th>BribePerProposal</th>
            </tr>
          </thead>
          <tbody>
            {allValidatorBribes &&
              allValidatorBribes.map((bribe: any, index: number) => (
                <tr key={index}>
                  <td>{ellipsisAddress(bribe.consensusAddress)}</td>
                  <td>{bribe.startEpoch}</td>
                  <td>{bribe.numBlockProposals}</td>
                  <td>{bribe.numBlockProposalsBribed}</td>
                  <td>{JSON.stringify(bribe.bribePerProposal)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Stack>
      <Divider />
      <Stack spacing={1}>
        <Typography level="title-lg">Create Bribe</Typography>
        <Input
          placeholder={`Start epoch ( current : ${
            currentEpoch ? currentEpoch[0].toString() : 0
          } )`}
          variant="outlined"
          value={startEpoch}
          onChange={(event) => setStartEpoch(event.target.value)}
        />
        <Input
          placeholder="numBlockProposals"
          variant="outlined"
          value={numBlockProposals}
          onChange={(event) => setNumBlockProposals(event.target.value)}
        />
        <Input
          placeholder="Coins"
          variant="outlined"
          value={coins}
          onChange={(event) => setCoins(event.target.value)}
        />
        <Button
          onClick={async () => {
            writeContract({
              abi: BRIBE_ABI,
              address: BRIBE_PRECOMPILE_ADDRESS,
              functionName: "createBribe",
              args: [
                "0x388Ff9fdB11A22aD78e9C5977CC4eD130cE5E88b",
                Number(startEpoch),
                Number(numBlockProposals),
                JSON.parse(coins).map((coin: any) => {
                  return {
                    denom: coin.denom,
                    amount: BigInt(coin.amount * 100000000000000000),
                  };
                }),
              ],
            });
          }}
        >
          Create Bribe
        </Button>
        <Typography>{error?.message}</Typography>
      </Stack>
    </Stack>
  );
};
