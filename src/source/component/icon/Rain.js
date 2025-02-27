import Lottie from "lottie-react"
import rain from '../../../shower rain.json'

function Rain() {
  return (
    <div className="lottie">
      <Lottie animationData={rain} loop={true} className="lottieContainer" />
    </div>
  )
}

export default Rain;
