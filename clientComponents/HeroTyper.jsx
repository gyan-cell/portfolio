'use client'


import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const HeroTyper = () => {
  return (
    <div className='heroHead'  >
      <h2>I Am  {` `}
        <span>
          <Typewriter
            words={['Developer.','Designer,','And a','Chess-Enthusiast.']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
      </h2>
    </div>
  )
}

export default HeroTyper    
