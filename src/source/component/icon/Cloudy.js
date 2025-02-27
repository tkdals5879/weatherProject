import Lottie from "lottie-react"
import cloudy from '../../../scattered clouds.json'

function Cloudy() {
  return (
    <Lottie animationData={cloudy} loop={true} style={{width:'360px', margin:'auto'}}/>

  )
}

export default Cloudy;
