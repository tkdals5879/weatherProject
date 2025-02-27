import Lottie from "lottie-react"
import failedAnimation from '../../../fetch failed source 01.json'

function Failed() {
  return (
    <>
    <Lottie className="failedWrap" animationData={failedAnimation} loop={true} style={{width:'160px', margin:'auto'}}/>
    <h2 style={{textAlign:'center'}}>Fetch Data is Failed..</h2>
    </>
  )
}

export default Failed;
