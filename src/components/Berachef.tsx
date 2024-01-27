import { Button, Input, Stack, Table, Typography } from "@mui/joy";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

import BERACHEF_ABI from "@/abi/IBerachefModule.abi";
import EPOCH_ABI from "@/abi/IEpochModule.abi";
import { ellipsisAddress } from "@/utils/strings";
import { ethers } from "ethers";
import { useState } from "react";

const EPOCH_PRECOMPILE_ADDRESS = "0x612Dd8a861161819A4AD8F6f3E2A0567602877c0";
const BERACHEF_PRECOMPILE_ADDRESS =
  "0x888AF53B67D1698E04B2B9A9406AF0FFEB2EF05E";
export const Berachef = () => {
  const [startEpoch, setStartEpoch] = useState("");
  const [weights, setWeights] = useState(
    JSON.stringify([
      {
        address: "0x5479fbdef04302d2deef0cc78f7d503d81fdfcc9",
        percent: "1.0",
      },
    ])
  );
  const account = useAccount();
  const { writeContract, error } = useWriteContract();
  const { data: activateCuttingBoards }: any = useReadContract({
    address: BERACHEF_PRECOMPILE_ADDRESS,
    abi: BERACHEF_ABI,
    functionName: "getActiveCuttingBoard",
    args: [account.address],
  });
  const { data: queuedCuttingBoard }: any = useReadContract({
    address: BERACHEF_PRECOMPILE_ADDRESS,
    abi: BERACHEF_ABI,
    functionName: "getQueuedCuttingBoard",
    args: [account.address],
  });
  const { data: currentEpoch }: any = useReadContract({
    address: EPOCH_PRECOMPILE_ADDRESS,
    abi: EPOCH_ABI,
    functionName: "getCurrentEpoch",
    args: ["berachain_epoch_identifier"],
  });

  if (!activateCuttingBoards) return <>This address is not a Validator.</>;
  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        <Typography level="title-lg">Activate Cutting Boards</Typography>
        <Table>
          <thead>
            <tr>
              <th>ReceiverAddress</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {activateCuttingBoards.weights.map((weight: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{ellipsisAddress(weight.receiverAddress)}</td>
                  <td>{ethers.formatEther(weight.percentageNumerator)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Stack>
      <Stack spacing={1}>
        <Typography level="title-lg">Queued Cutting Boards</Typography>
        <Table>
          <thead>
            <tr>
              <th>Start Epoch</th>
              <th>ReceiverAddress</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {queuedCuttingBoard &&
              queuedCuttingBoard.weights.map((weight: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{queuedCuttingBoard.startEpoch.toString()}</td>
                    <td>{ellipsisAddress(weight.receiverAddress)}</td>
                    <td>{ethers.formatEther(weight.percentageNumerator)}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Stack>
      <Stack spacing={1}>
        <Typography level="title-lg">Queue New Cutting Boards</Typography>
        <Input
          placeholder={`Start epoch ( current : ${currentEpoch[0].toString()} )`}
          variant="outlined"
          value={startEpoch}
          onChange={(event) => setStartEpoch(event.target.value)}
        />
        <Input
          placeholder="Weights"
          variant="outlined"
          value={weights}
          onChange={(event) => setWeights(event.target.value)}
        />
        <Button
          onClick={async () => {
            try {
              const result = await writeContract({
                abi: BERACHEF_ABI,
                address: BERACHEF_PRECOMPILE_ADDRESS,
                functionName: "queueNewCuttingBoard",
                args: [
                  account.address,
                  JSON.parse(weights).map((weight: any) => {
                    return {
                      receiverAddress: weight.address,
                      percentageNumerator: BigInt(
                        weight.percent * 1000000000000000000
                      ),
                    };
                  }),
                  Number(startEpoch),
                ],
              });
              console.log(result);
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Queue New Cutting Board
        </Button>
        <Typography>{error?.message}</Typography>
      </Stack>
    </Stack>
  );
};
