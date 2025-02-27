import Lottie from "lottie-react";
import loadingAnimation from '../../../loading source 02.json'

function Loading() {
  return( 
    <>
    <Lottie className="loadingWrap" animationData={loadingAnimation} loop={true} style={{width:'160px', margin:'auto'}}/>
    <h2 style={{textAlign:'center'}}>Loading...</h2>
    </>
   )
}

export default Loading;