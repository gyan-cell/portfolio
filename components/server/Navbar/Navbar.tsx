"use client"
import React, { useState } from 'react'
import NavElements from '../../client/NavElements'
import Link from 'next/link'
import "./Navbar.scss"
import { caveat, itim } from '@/styles/fonts'



const Navbar = () => {
  const isClient = typeof window !== 'undefined'
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (isClient) {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }

    }
  };
  if (isClient) {
    window.addEventListener('scroll', changeNavbarColor);
  }
  return (
    <nav className={colorChange ? "navbar navbarCol" : "navbar bg-transparent"}  >
      <div className='icon'  >
        <Link className={caveat.className} href='/'>Gyanranjan Jha</Link>
      </div>
      <NavElements />
    </nav>
  )
}

export default Navbar
