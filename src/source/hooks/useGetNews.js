import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const myNewsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const fetchNewsData = async(country) => {
  const response = await axios.get(`https://newsdata.io/api/1/latest?country=${country}&apikey=${myNewsApiKey}`)
  return response.data;
}

export const useGetNews = (country) => {
  return useQuery ({
    queryKey: ["NewsData",country],
    queryFn: () => fetchNewsData(country),
    enabled: !!country,
    gcTime: 60 * 1000,
    staleTime: 59 * 1000,
    refetchOnWindowFocus: false,
  })
}