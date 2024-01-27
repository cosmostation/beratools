export const ellipsisAddress = (hexAddress: any) => {
  try {
    return hexAddress
      ? `${hexAddress.substring(0, 7)}...${hexAddress.substring(
          hexAddress.length - 7
        )}`
      : null;
  } catch (e) {
    return hexAddress;
  }
};
