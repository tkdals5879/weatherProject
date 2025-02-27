import Lottie from "lottie-react"
import snow from '../../../snow.json'

function Snow() {
  return (
    <div className="lottie">
      <Lottie animationData={snow} loop={true} className="lottieContainer" />
    </div>
  )
}

export default Snow;
