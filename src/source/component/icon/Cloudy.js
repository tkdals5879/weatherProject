import Lottie from "lottie-react"
import cloudy from '../../../scattered clouds.json'

function Cloudy() {
  return (
    <div className="lottie">
      <Lottie animationData={cloudy} loop={true} className="lottieContainer" />
    </div>
  )
}

export default Cloudy;
