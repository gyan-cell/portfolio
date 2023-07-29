'use client'
import '../styles/navbar.scss'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx'
const Navelements = () => {

  const [menuOpen, IsMenuOpen] = useState(false);

  return (
    <div className='o'  >
      <div className='bars' onClick={() => { IsMenuOpen(!menuOpen) }}  > {menuOpen ? <RxCross1 /> : <AiOutlineBars />} </div>
      <div className='navCon' >
        <div className={`navBar ${menuOpen ? "navBarMob" : ""} `} >
          <ul>
            <li><Link href={'/'} >Home</Link></li>
            <li><Link href={'#about'} >About</Link></li>
            <li><Link href={'/#portfolio'} >Portfolio</Link></li>
            <li><Link href={'/#contact'} >Contact</Link></li>
            <li><Link href={'/blogs'} >Blogs</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navelements
