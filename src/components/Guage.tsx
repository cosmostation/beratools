import { Stack, Table, Typography } from "@mui/joy";

import { CUTTING_BOARDS } from "@/json/cuttingboards.json";
import { POOLS } from "@/json/pools.json";
import { ellipsisAddress } from "@/utils/strings";

export const Guage = () => {
  const cuttingBoards = CUTTING_BOARDS;
  const pools = POOLS;
  return (
    <Stack spacing={1}>
      <Typography level="title-lg">Guages</Typography>
      <Table>
        <thead>
          <tr>
            <th>Guage</th>
            <th>Address</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cuttingBoards.map((guage, index) => (
            <tr key={index}>
              <td>
                {
                  pools.find((pool) => {
                    return pool.pool === guage.id;
                  })?.poolName
                }
              </td>
              <td>{ellipsisAddress(guage.id)}</td>
              <td>{guage.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Stack>
  );
};
