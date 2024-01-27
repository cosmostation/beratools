import { Table } from "@mui/joy";
import { ellipsisAddress } from "@/utils/strings";

export const Guage = () => {
  const guages = [
    {
      address: "0x0000746573745f5f5f5f5f726563656976657232",
      description: "[UNKNOWN]",
    },
    {
      address: "0x0000746573745f5f5f5f5f726563656976657231",
      description: "[UNKNOWN]",
    },
    {
      address: "0x5905afd4df4ae11c1ef82750693d119e83b8a523",
      description: "[UNKNOWN]",
    },
    {
      address: "0x6e9a0883cd82b65b688ac772340385be7029aca9",
      description: "[UNKNOWN]",
    },
    {
      address: "0xe92fc557295ee2e6ae0ee63cb673b1fc1b155711",
      description: "[UNKNOWN]",
    },
    {
      address: "0xcbe252445d2e91fa528acd1d9a03c42df17f7c04",
      description: "[BERPS] bHONEY",
    },
    {
      address: "0x101f52c804c1c02c0a1d33442eca30ecb6fb2434",
      description: "[BEX POOL] 50WETH-50HONEY",
    },
    {
      address: "0x5479fbdef04302d2deef0cc78f7d503d81fdfcc9",
      description: "[BEX POOL] 50STGUSDC-50HONEY",
    },
    {
      address: "0x751524e7badd31d018a4caf4e4924a21b0c13cd0",
      description: "[BEX POOL] 50WBTC-50HONEY",
    },
    {
      address: "0xa88572f08f79d28b8f864350f122c1cc0abb0d96",
      description: "[BEX POOL] 50WBERA-50HONEY",
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>Description</th>
          <th style={{ width: "65%" }}>Address</th>
        </tr>
      </thead>
      <tbody>
        {guages.map((guage, index) => (
          <tr key={index}>
            <td>{guage.description}</td>
            <td>{ellipsisAddress(guage.address)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
