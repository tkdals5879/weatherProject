import Lottie from "lottie-react"
import fewClouds from '../../../few clouds.json'

function FewClouds() {
  return (
    <Lottie animationData={fewClouds} loop={true} style={{width:'360px', margin:'auto'}}/>

  )
}

export default FewClouds
