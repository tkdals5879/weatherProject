import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetWeather } from '../../hooks/useGetWeather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureArrowUp, faTemperatureArrowDown, faTemperatureHalf, faDroplet, faWind, faStar } from '@fortawesome/free-solid-svg-icons'
import { toggleFavorite } from '../../redux/slice/LocationSlice'
import { setCityName } from '../../redux/slice/LocationSlice'
import { useRestCountries } from '../../hooks/useRestCountries'

// 아이콘들
import Loading from '../icon/Loading'
import Failed from '../icon/Failed'
import ClearSky from '../icon/ClearSky'
import FewClouds from '../icon/FewClouds'
import Cloudy from '../icon/Cloudy'
import Rain from '../icon/Rain'
import ThunderStorm from '../icon/ThunderStorm'
import Snow from '../icon/Snow'
import Mist from '../icon/Mist'
// 
import '../../css/weatherinformation/weatherInformation.css'
import RestCountries from './RestCountries'

function WeatherInformation() {



  const dispatch = useDispatch()
  const { cityName, currentLocation, favoriteCities } = useSelector((state) => state.location)

  // console.log("cityName : ",cityName)

  const location = cityName ? { city: cityName } : { lat: currentLocation.lat, lng: currentLocation.lng }
  const { data: W_data, isLoading, isError } = useGetWeather(location)
  // console.log("useGetweather? >>", useGetWeather(location))
  // console.log("Location >>", location)
  // useEffect(() => {console.log("data >>", W_data)},[W_data])


  // const { data: C_data } = useRestCountries()
  // console.log("C_data > ", C_data)

  // const findCountry = C_data?.find(item => item.cca2 === W_data?.sys?.country);
  // useEffect(() => { console.log("findCountry > ", findCountry) }, [findCountry])

  const weatherData = W_data;
  // console.log("weatherData > ",weatherData)
  const weatherTemp = weatherData?.main;
  // console.log("weatherTemp > ", weatherTemp)



  // ////////////////////////////////////////////////////////////////////////////////////////////// 데이터 받아오기 ▲


  // 


  // ////////////////////////////////////////////////////////////////////////////////////////////// 즐겨찾기 ▼



  const isfavorite = favoriteCities.includes(cityName)

  useEffect(() => {
    if (weatherData?.name && cityName === '') {
      dispatch(setCityName(weatherData.name));
    }
  }, [weatherData, cityName, dispatch]);

  const favorite = () => {
    dispatch(toggleFavorite(cityName));
  }

  // useEffect(() => { console.log("toggle isfavorite! >> ", cityName, ">", isfavorite) }, [isfavorite])



  // ////////////////////////////////////////////////////////////////////////////////////////////// 즐겨찾기 ▲


  // 


  // ////////////////////////////////////////////////////////////////////////////////////////////// 마우스 hover시 나오는 정보 ▼



  const [showMore, setShowMore] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  const showMoreInformation = () => {
    setShowMore(true)
  }

  const hideShowMoreInformation = () => {
    setShowMore(false)
  }



  // ////////////////////////////////////////////////////////////////////////////////////////////// 마우스 hover시 나오는 정보 ▲


  // 


  // ////////////////////////////////////////////////////////////////////////////////////////////// 날씨에 따른 아이콘 ▼



  const weatherIconMap = {
    "01d": <ClearSky />,
    "01n": <ClearSky />,
    "02d": <FewClouds />,
    "02n": <FewClouds />,
    "03d": <Cloudy />,
    "03n": <Cloudy />,
    "04d": <Cloudy />,
    "04n": <Cloudy />,
    "09d": <Rain />,
    "09n": <Rain />,
    "10d": <Rain />,
    "10n": <Rain />,
    "11d": <ThunderStorm />,
    "11n": <ThunderStorm />,
    "13d": <Snow />,
    "13n": <Snow />,
    "50d": <Mist />,
    "50n": <Mist />,
  }

  const weatherIcon = weatherIconMap[weatherData?.weather[0]?.icon] || <ClearSky />



  // ////////////////////////////////////////////////////////////////////////////////////////////// 날씨에 따른 아이콘 ▲



  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <Failed />
  }


  return (
    <div className='weatherInformation' onMouseMove={handleMouseMove}>
      <div className='headerWrap'>
        <div onMouseOver={showMoreInformation} onMouseOut={hideShowMoreInformation}>
          <h1>{weatherData?.name}</h1>
        </div>
        <button type='button' onClick={favorite}><FontAwesomeIcon icon={faStar} color={isfavorite ? 'gold' : '#777'} style={{ transition: '.2s' }} /></button>
      </div>

      {showMore && (
        <div className='infoBox' style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px`, transform: 'translate(-100%,-18%)' }}>
          <RestCountries />
        </div>
      )}

      <div className='bodyWrap'>


        <div className='temp'>
          <div className='icon'>{weatherIcon}</div>

        </div>
        <div className='detailInfo'>
          <div className='ib_1'>
            <div className='iconbox '>
              <FontAwesomeIcon icon={faTemperatureArrowUp} />
            </div>
            <p>최고기온 : {(weatherTemp?.temp_max - 273.15).toFixed(1)}°C</p>
          </div>
          {/* ////////// */}
          <div className='ib_2'>
            <div className='iconbox '>
              <FontAwesomeIcon icon={faTemperatureArrowDown} />
            </div>
            <p>최저기온 : {(weatherTemp?.temp_min - 273.15).toFixed(1)}°C</p>
          </div>
          {/* ////////// */}
          <div className='ib_3'>
            <div className='iconbox '>
              <FontAwesomeIcon icon={faTemperatureHalf} />
            </div>
            <p>체감 온도 : {(weatherTemp?.feels_like - 273.15).toFixed(1)}°C</p>
          </div>
          {/* ////////// */}
          <div className='ib_4'>
            <div className='iconbox '>
              <FontAwesomeIcon icon={faDroplet} />
            </div>
            <p>습도 : {weatherData?.main.humidity}%</p>

          </div>
          {/* ////////// */}
          <div className='ib_5'>
            <div className='iconbox '>
              <FontAwesomeIcon icon={faWind} />
            </div>
            <p>풍속 : {weatherData?.wind.speed}/s</p>
          </div>
        </div>

        <div className='nowWrap'>
          <h3 className='nowTemp'>{(weatherTemp?.temp - 273.15).toFixed(1)}°C</h3>
          <p>{weatherData?.weather[0].description}</p>
        </div>

      </div>

    </div>
  )
}

export default WeatherInformation;