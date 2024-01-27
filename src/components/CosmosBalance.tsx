import BANK_ABI from "@/abi/IBankModule.abi";
import React from "react";
import { useReadContract } from "wagmi";

const BANK_PRECOMPILE_ADDRESS = "0x4381dC2aB14285160c808659aEe005D51255adD7";

type IProps = {
  address: string;
};

export const CosmosBalance = ({ address }: IProps) => {
  const { data: balances }: any = useReadContract({
    address: BANK_PRECOMPILE_ADDRESS,
    abi: BANK_ABI,
    functionName: "getAllBalances",
    args: [address],
  });
  if (!balances) return <></>;
  return balances.map((balance: any) => (
    <tr key={balance.denom}>
      <td>{balance.amount.toString()}</td>
      <td>{balance.denom}</td>
    </tr>
  ));
};
