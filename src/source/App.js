import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './css/app.css'
import { useDispatch, useSelector } from 'react-redux';
import { useGetWeather } from "./hooks/useGetWeather";

import Nav from "./navigation/Nav";
import Main from "./component/Main";
import News from "./component/News";
import Input from "./component/input/Input";
import { setCurrentLocation } from "./redux/slice/LocationSlice";


function App() {

  const dispatch = useDispatch()

  const [activeIndex,setActiveIndex] = useState(0)
  // 최초렌더링 시 날씨화면이 보이도록 설정 [ 0 = 날씨 / 1 = 뉴스 ]

  const {currentLocation} = useSelector((state) => state.location.currentLocation)



// ////////////////////////////////////////////////////////////////////// 현재위치 위,경도 값 받아오기 ▼ 

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude
      dispatch(setCurrentLocation({ lat, lng }))
    })
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])



// ////////////////////////////////////////////////////////////////////// 현재위치 위,경도 값 받아오기 ▲ 





  return (
    <div className={`appWrap ${activeIndex === 1 ? 'newsBg' : 'weatherBg'}`}>
      <div className="appInner">
        <Input />
        <div className="appComponentWrap">
          <Nav setActiveIndex={setActiveIndex}/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
