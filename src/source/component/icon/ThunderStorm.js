import Lottie from "lottie-react"
import thunderStorm from '../../../thunderstorm.json'

function ThunderStorm() {
  return (
    <div className="lottie">
      <Lottie animationData={thunderStorm} loop={true} className="lottieContainer" />
    </div>

  )
}

export default ThunderStorm;
