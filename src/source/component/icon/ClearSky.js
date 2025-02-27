import Lottie from "lottie-react";
import clearSky from '../../../clear sky.json'

function ClearSky () {
  return(
    <>
    <Lottie animationData={clearSky} loop={true} style={{width:'360px', margin:'auto'}}/>
    </>
  )
}

export default ClearSky;