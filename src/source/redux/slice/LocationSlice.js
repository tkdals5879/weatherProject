import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentLocation: {
    lat: null,
    lng: null
  },
  cityName: '',
  favoriteCities: [],
  modalFav: false,
};

const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation.lat = action.payload.lat
      state.currentLocation.lng = action.payload.lng
    },
    setCityName: (state, action) => {
      state.cityName = action.payload
    },
    toggleFavorite: (state,action) => {
      const city = action.payload;
      if(state.favoriteCities.includes(city)){
        state.favoriteCities = state.favoriteCities.filter(favcities => favcities !== city);
      } else{
        state.favoriteCities.unshift(city);
      }
    },
    setModalFav: (state,action) => {
      state.modalFav = action.payload
    }
  }
})

export const { setCurrentLocation, setCityName, toggleFavorite, setModalFav } = LocationSlice.actions;
export default LocationSlice.reducer;