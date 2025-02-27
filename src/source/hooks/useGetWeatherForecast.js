import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const myWeatherApiKey = process.env.REACT_APP_WEATHER_API_KEY

const fetchWeatherForecast = async({queryKey}) => {
  const cityName = queryKey[1]
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${myWeatherApiKey}`)
  // api받아올 때 한국 기준으로 받아오니까 이 값을 동적으로 바꿔야함
  return response.data;
}

export const useGetWeatherForecast = (cityName) => {
  return useQuery({
    queryKey: ["weatherForecast", cityName],
    queryFn: fetchWeatherForecast ,
    refetchOnWindowFocus: false,
  })
}