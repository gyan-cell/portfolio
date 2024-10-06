import Image from 'next/image'
import React from 'react'
import "./hero.scss"
import image from "@/images/wallhaven-5w1627.jpg"
import LottieFiles from '@/components/client/LottieFiles'


const Hero = () => {
  return (
    <div className="heroWrapper">
      <Image
        className="heroImage"
        priority
        src={image}
        fill
        alt="hero image example"
      />

      <div className="heroContent">
        <div className='heroText'  >
          <h1>Hi, I'm <span className='underline underline-offset-4 underline-accent'  >Gyanranjan Jha.</span></h1>
          <h1>Full Stack Web Developer.</h1>
          <h1>I Am a <span className='underline underline-offset-4 underline-accent'  >Frontend Web Developer.</span></h1>
          <h1>I Am a <span className='underline underline-offset-4 underline-accent'  >Backend Developer.</span></h1>
          <h1>I Play <span className='underline underline-offset-4 underline-accent'  >Chess.</span></h1>
        </div>
        <div className='heroSlider'  >
          <LottieFiles />
        </div>
      </div>
    </div>
  )
}

export default Hero
