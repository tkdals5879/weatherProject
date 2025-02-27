import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faCloudSun } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'

import '../css/nav/nav.css'

function Nav({ setActiveIndex }) {

  const handleClick = (index) => {
    setActiveIndex(index)
  }


  return (
    <div className='navWrap'>
      <Link to={'/'}><button type='button' onClick={() => handleClick(0)} >
        <motion.div whileTap={{ scale: 0.9, rotate: 10 }} whileHover={{ scale: 0.9 }} transition={{ type: 'spring', duration: .5, stiffness: 700 }}>
          <FontAwesomeIcon icon={faCloudSun} />
        </motion.div>
      </button></Link>

      <Link to={'/news'}><button type='button' onClick={() => handleClick(1)} >
        <motion.div whileTap={{ scale: 0.9, rotate: 10 }} whileHover={{ scale: 0.9 }} transition={{ type: 'spring', duration: .5, stiffness: 700 }}>
          <FontAwesomeIcon icon={faNewspaper} />
        </motion.div>
      </button></Link>
    </div>
  )
}

export default Nav;
