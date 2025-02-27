import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRestCountries } from '../../hooks/useRestCountries'
import { useGetWeather } from '../../hooks/useGetWeather';

import '../../css/restCountries/restCountries.css'


function RestCountries() {

  const { currentLocation, cityName } = useSelector((state) => state.location)

  const location = cityName ? { city: cityName } : { lat: currentLocation.lat, lng: currentLocation.lng };

  const { data: C_data } = useRestCountries()
  // console.log("C_data > ", C_data)


  const { data: W_data } = useGetWeather(location)
  // console.log("W_data > ", W_data)

  const findCountry = C_data?.find(item => item.cca2 === W_data?.sys?.country);
  // useEffect(() => { console.log("findCountry > ", findCountry) }, [findCountry])




  // 언어는 동적으로 받아와야지 화면에 표시가능할듯 > 동적으로 받아오는 로직
  let getLanguagesKey = Object?.keys(findCountry?.languages || {})[0]
  let showLanguages = findCountry?.languages?.[getLanguagesKey]
  // console.log(getLanguagesKey)
  // console.log(showLanguages)

  return (
    <div className='restCountriesWrap'>
      <h1> Information </h1>
      <a href={findCountry?.maps?.openStreetMaps} target='_black'><img src={findCountry?.flags?.png} alt={findCountry?.flags?.alt} /></a>
      <div>
        <p>국가명 : {findCountry?.translations?.kor?.common} ( {findCountry?.name?.official} )</p>
        <p>수도 : {findCountry?.capital}</p>
        <p>언어 : {showLanguages}</p>
        <p>문화권 : {findCountry?.region} ( {findCountry?.subregion} )</p>
      </div>


    </div>
  )
}

export default RestCountries;