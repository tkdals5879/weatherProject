import axios from "axios";
import {useQuery} from "@tanstack/react-query"

const myWeatherApiKey = process.env.REACT_APP_WEATHER_API_KEY

const fetchCurrentWeather = async( location ) => {
  const lat = location.queryKey[1]
  const lng = location.queryKey[2]
  const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myWeatherApiKey}&lang=KR`)
  return data;
}



export const useGetCurrentLocation = (location) => {
  return useQuery({
    queryKey: ["CurrentLoacation" , location],
    queryFn: fetchCurrentWeather,
    gcTime: 60 * 1000,
    staleTime: 59 * 1000,
    refetchOnWindowFocus: false,
  })
}
