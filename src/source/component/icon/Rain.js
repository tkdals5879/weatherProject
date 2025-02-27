import Lottie from "lottie-react"
import rain from '../../../shower rain.json'

function Rain() {
  return (
    <Lottie animationData={rain} loop={true} style={{width:'360px', margin:'auto'}}/>

  )
}

export default Rain;
