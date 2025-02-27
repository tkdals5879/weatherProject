import React from 'react'
import { useGetWeatherForecast } from '../../hooks/useGetWeatherForecast';
import { useSelector } from 'react-redux';

import '../../css/graph/graph.css'

function Graph() {

  const cityName = useSelector((state) => state.location.cityName) || "Republic of Korea";

  const { data } = useGetWeatherForecast(cityName);

  
  const filterData = data?.list.filter((_,idx) => idx % 8 === 0)
  // console.log("!!!@!@!@!@!@!filterData >>> ", filterData);
  
  const weatherMainData = filterData?.map(mainData => mainData?.main)
  // console.log("!!!@!@!@!@!@!weatherMainData >>> ", weatherMainData);
  
  const weatherDtData = filterData?.map(mainData => mainData?.dt_txt)
  const weatherIconData = filterData?.map(mainData => mainData?.weather)
  


  return (
      <ul className='graph'>
        {
          weatherMainData?.map((data, idx) => (
            <li key={idx}>
              <p>{weatherDtData[idx]}</p>
              <img src={`https://openweathermap.org/img/wn/${weatherIconData[idx]?.[0]?.icon}.png`} alt={weatherIconData[idx]?.[0]?.description} />
              <p>온도 : {(data?.temp - 273.15).toFixed(1)} °C</p>
              <p>습도 : {data?.humidity} %</p>
            </li>
          ))
        }
      </ul>
  )
}

export default Graph;
