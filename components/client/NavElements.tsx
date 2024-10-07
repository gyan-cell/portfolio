"use client"
import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
const NavElements = () => {


  const [showNav, setShowNav] = React.useState(true)

  return (
    <>
      <div className={showNav ? 'NavElements  ' : 'NavElements activeNav bg-transparent  bg-none  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 '}  >
        <Link href='#about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/resume'>Resume</Link>
        <Link href={'/meet'} >Google Meet Me </Link>
        <Link href={'mailto:hellogyanranjan@gmail.com'} type="email">Email</Link>
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
