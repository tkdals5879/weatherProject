import Lottie from "lottie-react";
import clearSky from '../../../clear sky.json'

function ClearSky () {
  return(
    <div className="lottie">
    <Lottie animationData={clearSky} loop={true} className="lottieContainer"/>
    </div>
  )
}

export default ClearSky;