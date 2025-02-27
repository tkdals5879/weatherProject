import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { setCityName } from '../../redux/slice/LocationSlice'
import { setModalFav } from '../../redux/slice/LocationSlice'
import Favorite from './favorite/Favorite'

import '../../css/input/input.css'


function Input() {

  const [cityName, setCityNameState] = useState('');
  const dispatch = useDispatch()

  const { currentLocation, modalFav } = useSelector((state) => state.location)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName === '') {
      alert("입력값이 없어 현재위치기반의 날씨를 불러옵니다.")
    }
    dispatch(setCityName(cityName.toLowerCase()));
    // console.log("cityName : ",cityName);
    setCityNameState('');
  };

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////




  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // GPS아이콘 누르면 현재위치 기반의 날씨정보를 불러오게 하는 로직 >> 버튼 클릭 시 공백값을 보냄으로써 현재위치 날씨정보 제공

  const handleGetcurrentLocation = () => {
    if (currentLocation.lat && currentLocation.lng) {
      dispatch(setCityName(''))
    }
    console.log("현재위치 기반의 날씨정보 표시")
  }


  const handleFavorite = () => {
    dispatch(setModalFav(true))
  }


  return (
    <div className='inputWrap'>
      <form onSubmit={handleSubmit}>
        <motion.button type='button' onClick={handleGetcurrentLocation} whileHover={{ y: -10, duration: .3, type:'spring', stiffness:500 }} whileTap={{ y:10 }}>
          <FontAwesomeIcon icon={faLocationDot} />
        </motion.button>
        <input
          type="text"
          placeholder='Please Search in English...'
          value={cityName}
          onChange={(e) => setCityNameState(e.target.value)}
        />
        <div className='btnWrap'>
          <motion.button type='submit' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 500, duration: 0.3 }} className='searchBtn'><FontAwesomeIcon icon={faMagnifyingGlass} /></motion.button>
          <motion.button type='button' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 500, duration: 0.3 }} className='favBtn' onClick={handleFavorite}><FontAwesomeIcon icon={faStar} /></motion.button>
        </div>
      </form>

      <AnimatePresence>
        {modalFav && (<Favorite />)}
      </AnimatePresence>
    </div>
  )
}

export default Input

// 구현할 로직 > [ 검색기능 , 찜목록 추가기능(추가 시 Fav컴포넌트에 버튼으로 들어가기) , 찜목록 클릭 시 날씨 표시 ]
