import { Box, Button } from "@mui/joy";

import BANK_ABI from "@/abi/IBankModule.abi";
import { useWriteContract } from "wagmi";

const BANK_PRECOMPILE_ADDRESS = "0x4381dC2aB14285160c808659aEe005D51255adD7";
export const Bank = () => {
  const { writeContract } = useWriteContract();

  return (
    <Box>
      <Button
        onClick={() => {
          writeContract({
            abi: BANK_ABI,
            address: BANK_PRECOMPILE_ADDRESS,
            functionName: "send",
            args: [
              "0x388Ff9fdB11A22aD78e9C5977CC4eD130cE5E88b",
              [{ amount: BigInt(10000), denom: "astgusdc" }],
            ],
          });
        }}
      >
        Send USDC
      </Button>
      <Button
        onClick={() => {
          writeContract({
            abi: BANK_ABI,
            address: BANK_PRECOMPILE_ADDRESS,
            functionName: "send",
            args: [
              "0x388Ff9fdB11A22aD78e9C5977CC4eD130cE5E88b",
              [{ amount: BigInt(10000), denom: "ahoney" }],
            ],
          });
        }}
      >
        Send HONEY
      </Button>
    </Box>
  );
};
