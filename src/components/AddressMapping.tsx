import { Button, Input, Stack, Typography } from "@mui/joy";
import { bytesToHex, hexToBytes } from "@/utils/strings";

import { bech32 } from "bech32";
import { useState } from "react";

export const AddressMapping = () => {
  const [hex, setHex] = useState("");
  const [bechAddress, setBechAddress] = useState("");
  const [validatorAddress, setValidatorAddress] = useState("");

  const convert = (value: string) => {
    var words;
    if (value.startsWith("0x")) {
      words = bech32.toWords(hexToBytes(value.substring(2)));
    } else {
      words = bech32.decode(value).words;
    }
    setHex(`0x${bytesToHex(bech32.fromWords(words))}`);
    setBechAddress(bech32.encode("bera", words));
    setValidatorAddress(bech32.encode("beravaloper", words));
  };

  return (
    <Stack spacing={1}>
      <Typography level="title-lg">Address Mapping</Typography>

      <Stack direction="row" spacing={2}>
        <Input
          placeholder="hex address ( 0xXXXXX..... ) "
          variant="outlined"
          fullWidth
          value={hex}
          onChange={(event) => {
            setHex(event.target.value);
          }}
        />
        <Button onClick={async () => convert(hex)}>Convert</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Input
          placeholder="bech32 address ( bera1.... )"
          variant="outlined"
          value={bechAddress}
          fullWidth
          onChange={(event) => {
            setBechAddress(event.target.value);
          }}
        />
        <Button onClick={async () => convert(bechAddress)}>Convert</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Input
          placeholder="bech32 validator address ( beravaloper1.... )"
          variant="outlined"
          value={validatorAddress}
          fullWidth
          onChange={(event) => {
            setValidatorAddress(event.target.value);
          }}
        />
        <Button onClick={async () => convert(validatorAddress)}>Convert</Button>
      </Stack>
    </Stack>
  );
};
