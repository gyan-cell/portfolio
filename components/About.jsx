
import React from 'react'
import "../styles/about.scss"
import AboutCircle from './AboutCircle'

const About = () => {
  return (
    <div id='about' className='about' >
      <div className='aboutCirlce'   >
        <AboutCircle />
      </div>
      <div className='aboutIntro'>
        <div className='aboutHead' >
          <h2>Hello My Name Is <span>Gyanranjan Jha..</span>  </h2>
          <p>I discovered the world of programming when I was just 17. Since then, I've been on an exciting journey of crafting digital wonders. I'm a tech enthusiast with an insatiable curiosity for the latest advancements in the industry.</p>
          <p>
            I thrive on pushing the boundaries of technology and innovation, and that's why I proudly run Linux on my machine (ARCH BTW). The freedom and flexibility it offers perfectly complement my passion for coding and problem-solving.
          </p>
          <p>
            Join me as I take you through my digital adventures, where lines of code converge into captivating creations. Let's dive into the realm of web development and software sorcery together!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
