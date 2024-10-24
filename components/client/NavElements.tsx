"use client"
import { itim } from '@/styles/fonts';
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
const NavElements = () => {

  const [showNav, setShowNav] = React.useState(true)

  return (
    <>
      <div className={showNav ? 'NavElements  ' : 'NavElements activeNav bg-transparent  bg-none  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 '}  >
        <Link className={itim.className} href='#about'>About</Link>
        <Link className={itim.className} href='#projects'>Projects</Link>
        <Link className={itim.className} href='#contact'>Contact</Link>
        <Link className={itim.className} href={'mailto:hellogyanranjan@gmail.com'} type="email">Email</Link>
        <Link className={itim.className} href='/blog'>Blogs</Link>
      </div>
      <div className='navMenuicon'  >
        {
          showNav ? <AiOutlineMenu onClick={() => setShowNav(false)} /> : <FaX onClick={() => setShowNav(true)} />
        }
      </div>
    </>
  )
}

export default NavElements
