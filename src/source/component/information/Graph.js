import React from 'react'
import { useGetWeatherForecast } from '../../hooks/useGetWeatherForecast';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react'

import '../../css/graph/graph.css'

function Graph() {

  const cityName = useSelector((state) => state.location.cityName) || "Republic of Korea";

  const { data } = useGetWeatherForecast(cityName);


  const filterData = data?.list.filter((_, idx) => idx % 8 === 0)
  // console.log("!!!@!@!@!@!@!filterData >>> ", filterData);

  const weatherMainData = filterData?.map(mainData => mainData?.main)
  // console.log("!!!@!@!@!@!@!weatherMainData >>> ", weatherMainData);

  const weatherDtData = filterData?.map(mainData => mainData?.dt_txt)
  const weatherIconData = filterData?.map(mainData => mainData?.weather)



  return (
    <>
      <Swiper
        className='graph'
        slidesPerView={"auto"}
        breakpoints={{
          1100: { slidesPerView: 3 },
        }}
        >
        {
          weatherMainData?.map((data, idx) => (
            <SwiperSlide key={idx} className='swiper-slide'>
              <p>{weatherDtData[idx]}</p>
              <img src={`https://openweathermap.org/img/wn/${weatherIconData[idx]?.[0]?.icon}.png`} alt={weatherIconData[idx]?.[0]?.description} />
              <p>온도 : {(data?.temp - 273.15).toFixed(1)} °C</p>
              <p>습도 : {data?.humidity} %</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default Graph;
