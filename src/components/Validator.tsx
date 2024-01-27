import STAKING_ABI from "@/abi/IStakingModule.abi";
import { Table } from "@mui/joy";
import { ellipsisAddress } from "@/utils/strings";
import { ethers } from "ethers";
import numeral from "numeral";
import { useReadContract } from "wagmi";

const STAKING_PRECOMPILE_ADDRESS = "0xd9A998CaC66092748FfEc7cFBD155Aae1737C2fF";
export const Validator = () => {
  const { data: validators }: any = useReadContract({
    address: STAKING_PRECOMPILE_ADDRESS,
    abi: STAKING_ABI,
    functionName: "getValidators",
    args: [
      { key: "", offset: 0, limit: 100, countTotal: false, reverse: false },
    ],
  });
  if (!validators) return <></>;
  return (
    <Table>
      <thead>
        <tr>
          <th>Moniker</th>
          <th>DelegatorShares</th>
          <th>OperatorAddress</th>
          <th>Commission</th>
        </tr>
      </thead>
      <tbody>
        {validators[0].map((validator: any, index: number) => {
          return (
            <tr key={index}>
              <td>{validator.description.moniker}</td>
              <td>
                {numeral(ethers.formatEther(validator.tokens)).format("0.0a")}
              </td>
              <td>{ellipsisAddress(validator.operatorAddr)}</td>
              <td>
                {ethers.formatEther(validator.commission.commissionRates.rate)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
