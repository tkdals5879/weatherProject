import Lottie from "lottie-react"
import thunderStorm from '../../../thunderstorm.json'

function ThunderStorm() {
  return (
    <Lottie animationData={thunderStorm} loop={true} style={{width:'360px', margin:'auto'}}/>

  )
}

export default ThunderStorm;
