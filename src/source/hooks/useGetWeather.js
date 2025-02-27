import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const myWeatherApiKey = process.env.REACT_APP_WEATHER_API_KEY

const fetchCityWeather = async ({ queryKey }) => {
  const { lat , lng , city } = queryKey[1];
  // console.log("reactQuery컴포넌트에서 받는 querykey >> ", queryKey)
  // console.log("reactQuery컴포넌트에서 받는 city >> ", city)

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myWeatherApiKey}&lang=KR`
  if (lat && lng) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myWeatherApiKey}&lang=KR`
  } else if (city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myWeatherApiKey}&lang=KR`
  }

  const { data } = await axios.get(url)
  return data;
}

export const useGetWeather = (location) => {
  return useQuery({
    queryKey: ["CityWeather", location],
    queryFn: fetchCityWeather,
    gcTime: 60 * 1000,
    staleTime: 59 * 1000,
    retry: 0,
    enabled: !!(location?.lat || location?.lng || location?.city ),
    refetchOnWindowFocus: false,
  })
}