import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useGetNews } from '../hooks/useGetNews';
import { useGetWeather } from '../hooks/useGetWeather';
import Loading from './icon/Loading';
import Failed from './icon/Failed';

import '../css/news/news.css'

function News() {

  const { currentLocation, cityName } = useSelector((state) => state.location)
  const location = cityName ? { city: cityName } : { let: currentLocation.lat, lng: currentLocation.lng }
  const { data: getWeatherData } = useGetWeather(location)
  const getWeatherData_C = getWeatherData?.sys?.country
  // console.log("getWeatherData_C >>>>>>>>>>>>>>> ", getWeatherData_C)

  const [country, setCountry] = useState('')
  // 첫 렌더링 시 현재 위치값 받아와서 country의 기본값으로 되게 해야하니까 useGetWeather을 불러와서 현재위치값 받아올 수 있도록 먼저해야함
  // useGetWeather을 사용하려면 현재 위치값을 받아와야하므로 state.location에서 기본값들 불러오고 기본값들에게 값 전달해주기 >> WeatherInformation컴포넌트에서 로직 가져오기

  useEffect(() => {
    if (getWeatherData_C) {
      setCountry(getWeatherData_C)
    }
  }, [getWeatherData_C])
  // useEffect덕분에 getWeatherData_C값이 있을 때 country에 sys.country값이 들어가게되고, 이로써 country는 뉴스API를 불러오는 매개변수로 사용될 수 있음!

  const { data: getNewsData, isLoading, isError } = useGetNews(country);
  // console.log("newsData >>>>>>>>>>>>>>> ", getNewsData)


  const newsDatas = getNewsData?.results
  // console.log("newsDatas >>>>>>>>>>>>>", newsDatas)

  if (isLoading) {
    return (<> <Loading /> </>)
    // 로딩 컴포넌트 만들어야함 > 로딩 스피너 gif를 활용해도될듯
  }
  if (isError) {
    return (<><h1>Fetch Data is Failled...</h1> <Failed /> </>)
    // 에러 컴포넌트 만들어야함
  }

  return (
    <div className='newsWrap'>
      <h1> News </h1>
      <ul>
        {
          newsDatas?.map(news => (
            <motion.li key={news.article_id} whileTap={{ scale:0.9 }} transition={{ type:'spring', stiffness: 200, duration: .5 }} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <motion.a href={news.link} target='_blank' >
                <img src={news.image_url ? news.image_url : '/initialNewsImg.jpg'} alt={news.title} />
                <div>
                  <p>{news.title}</p>
                </div>
              </motion.a>
            </motion.li>
          ))
        }
      </ul>
    </div>
  )
}

export default News;
