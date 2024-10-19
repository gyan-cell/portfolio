import React from 'react'
import "./about.scss"
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import image from "@/images/wallhaven-p2myjp.jpg"

const About = () => {
  return (
    <div id="about">
      <div className='skillSection'  >
        <div className='skills'  >
          <div className='skillName'  >HTML <span  >99%</span>  </div>
          <div className='skillProgress'  ><Progress value={99} /></div>
        </div>
        <div className='skills'  >
          <div className='skillName'  >CSS <span  >90%</span>  </div>
          <div className='skillProgress'  ><Progress value={90} /></div>
        </div>
        <div className='skills'  >
          <div className='skillName'  >JAVASCRIPT <span  >80%</span>  </div>
          <div className='skillProgress'  ><Progress value={80} /></div>
        </div>
        <div className='skills'  >
          <div className='skillName'  >REACT <span  >90%</span>  </div>
          <div className='skillProgress'  ><Progress value={90} /></div>
        </div>
        <div className='skills'  >
          <div className='skillName'  >NODE <span  >70%</span>  </div>
          <div className='skillProgress'  ><Progress value={70} /></div>
        </div>
        <div className='skills'  >
          <div className='skillName'  >EXPRESS JS <span  >90%</span>  </div>
          <div className='skillProgress'  ><Progress value={90} /></div>
        </div>
        <div className='skills'  >
          <div className='skillName'  >MONGO DB <span  >60%</span>  </div>
          <div className='skillProgress'  ><Progress value={60} /></div>
        </div>
        <div className='skills'  >
          <div className='skillName'  >Python <span  >50%</span>  </div>
          <div className='skillProgress'  ><Progress value={50} /></div>
        </div>
        <div className='skills'  >
          <div className='skillName'  >NEXT JS <span  >85%</span>  </div>
          <div className='skillProgress'  ><Progress value={85} /></div>
        </div>
      </div>
      <div className='additionalSection'  >
        <Image src={image} alt="gyanranjan" />
        <h1>Who Am I?</h1>
        <p>My Name Is Gyanranjan Jha.</p>
        <p>I am From India. I Like To Read Books  , Listen To Music  , Play Chess  , <br /> Work Out , And Not To Mention I aM A Big Fan Of Cinema. </p>
        <p>I am Currently Learning Web Development. I am Trying To Improve My Skills. </p>
      </div>
    </div>
  )
}

export default About
