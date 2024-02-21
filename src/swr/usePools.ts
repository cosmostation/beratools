import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const usePools = () => {
  const { data, error } = useSWR(
    "https://artio.bex.berachain.com/api/getFilteredPools/api?page=1&perPage=100",
    fetcher,
    {
      refreshInterval: 300000,
    }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
