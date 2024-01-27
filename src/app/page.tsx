"use client";

import {
  Card,
  Container,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Typography,
} from "@mui/joy";

import { Account } from "@/components/Account";
import { AddressMapping } from "@/components/AddressMapping";
import { Balance } from "@/components/Balance";
import { Berachef } from "@/components/Berachef";
import { Bribe } from "@/components/Bribe";
import { Guage } from "@/components/Guage";
import { Validator } from "@/components/Validator";
import { useAccount } from "wagmi";
import { useState } from "react";

function App() {
  const account = useAccount();
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <Card sx={{ m: 5 }}>
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between">
            <Typography level="h1">🐻 Bera Tools ⚒️</Typography>
            <Account />
          </Stack>

          <Tabs
            value={index}
            onChange={(event, value) => setIndex(value as number)}
          >
            <TabList disableUnderline sx={{ mb: 3 }}>
              <Tab disableIndicator>Berachef</Tab>
              <Tab disableIndicator>Bribe</Tab>
              <Tab disableIndicator>Guages</Tab>
              <Tab disableIndicator>Validators</Tab>
              <Tab disableIndicator>Balances</Tab>
              <Tab disableIndicator>Address Mapping</Tab>
            </TabList>
            <TabPanel value={0}>
              <Berachef />
            </TabPanel>
            <TabPanel value={1}>
              <Bribe />
            </TabPanel>
            <TabPanel value={2}>
              <Guage />
            </TabPanel>
            <TabPanel value={3}>
              <Validator />
            </TabPanel>
            <TabPanel value={4}>
              <Balance address={account.address} />
            </TabPanel>
            <TabPanel value={5}>
              <AddressMapping />
            </TabPanel>
          </Tabs>
        </Stack>
      </Card>
    </Container>
  );
}

export default App;
