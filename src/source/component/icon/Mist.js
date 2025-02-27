import Lottie from "lottie-react"
import mist from '../../../mist.json'

function Mist() {
  return (
    <div className="lottie">
      <Lottie animationData={mist} loop={true} className="lottieContainer" />
    </div>
  )
}

export default Mist;
