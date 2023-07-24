import React from 'react'
import Image from 'next/image'
import img from '../public/web5.jpg'
import "../styles/hero.scss"
import HeroTyper from '@/clientComponents/HeroTyper'
import Link from 'next/link'
const Heropage = () => {
  return (
    <div id='heropage' style={{position:"relative",zIndex:"2"}}  >
      <div className='heroText' >
        <HeroTyper />
        <p>
          Delve into my portfolio and witness the symphony of creativity and technology, where websites breathe life into brands and applications simplify complexities.
        </p>
        <p>Let's explore the endless possibilities of web development and software, forging a path towards an unseen digital world.
        </p>
        <div className='button' >
          <Link href={'#about'}>About Me</Link>
          <Link href={'#projects'}>MY Projects</Link>
        </div>
      </div>
      <div className='heroImage' >
        <Image src={img} alt='cool' />
      </div>
    </div>
  )
}

export default Heropage   
