import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
import { setCityName } from '../../../redux/slice/LocationSlice';
import { setModalFav } from '../../../redux/slice/LocationSlice';
import { toggleFavorite } from '../../../redux/slice/LocationSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import '../../../css/favorite/favorite.css'


function Favorite() {

  const dispatch = useDispatch();
  const { favoriteCities } = useSelector((state) => state.location)

  useEffect(() => { console.log("추가된 즐겨찾는 도시 > ", favoriteCities) }, [favoriteCities])

  const handleCityClick = (city) => {
    dispatch(setCityName(city))
    dispatch(setModalFav(false))
  }

  const modalClose = () => {
    dispatch(setModalFav(false))
  }

  const deleteFav = (city) => {
    dispatch(toggleFavorite(city))
  }

  return (
    <div className='favoriteBg' onClick={modalClose}>
      <motion.div className='favoriteWrap' initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}>
        <h2> 즐겨찾는 도시 </h2>
        <motion.button type='button' onClick={modalClose} whileHover={{ rotate: 90, scale: 1.3 }}> <FontAwesomeIcon icon={faXmark} /> </motion.button>
        {favoriteCities.length === 0 ?
          <p>저장된 즐겨찾는 도시가 없습니다 !</p> :
          <ul>
            {
              favoriteCities.map((favCity, idx) => (
                <motion.li key={idx} onClick={() => handleCityClick(favCity)} className='favoriteCity'
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', duration: .3 }}
                >
                  {favCity}
                  <button
                    type='button' onClick={(e) => { e.stopPropagation(); deleteFav(favCity); }}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </motion.li>
              ))
            }
          </ul>
        }
      </motion.div>
    </div>
  )
}

export default Favorite;