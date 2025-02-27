import Lottie from "lottie-react"
import snow from '../../../snow.json'

function Snow() {
  return (
    <Lottie animationData={snow} loop={true} style={{width:'360px', margin:'auto'}}/>

  )
}

export default Snow;
