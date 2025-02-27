import Lottie from "lottie-react"
import fewClouds from '../../../few clouds.json'

function FewClouds() {
  return (
    <div className="lottie">
      <Lottie animationData={fewClouds} loop={true} className="lottieContainer" />
    </div>
  )
}

export default FewClouds
