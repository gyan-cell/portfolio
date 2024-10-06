"use client"
import React, { useRef } from 'react'

const LottieFiles = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://lottie.host/d1333e23-ea03-498b-ae99-cab7c227f8c9/7tI8TDA80I.json"
        style={{ width: "80%", height: "100%", colo: "red" }}
      >

      </lottie-player>


    </>
  )
}

export default LottieFiles
