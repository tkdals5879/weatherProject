import { configureStore } from "@reduxjs/toolkit";
import LocationReducer from './slice/LocationSlice'

let store = configureStore({
  reducer: {
    location : LocationReducer
  }
})

export default store;