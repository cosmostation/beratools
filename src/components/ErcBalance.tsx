import { ethers } from "ethers";
import { useBalance } from "wagmi";

type IProps = {
  owner: any;
  token: any;
  name: string;
};

export const ErcBalance = ({ name, owner, token }: IProps) => {
  const { data: balance, isError } = useBalance({
    address: owner,
    token: token,
  });
  return (
    <tr key={token}>
      <td>{balance?.formatted}</td>
      <td>{balance?.symbol}</td>
    </tr>
  );
};
