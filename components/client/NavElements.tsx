"use client"
import { itim } from '@/styles/fonts';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
const NavElements = () => {

  const [showNav, setShowNav] = React.useState(true);

  const pathName = usePathname();

  console.log(pathName);

  return (
    <>
      <div className={showNav ? 'NavElements  ' : 'NavElements activeNav bg-transparent  bg-none  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 '}  >
        <Link onClick={() => setShowNav(true)} className={itim.className} href={pathName === '/blogs' ? '/#about' : '#about'}>About</Link>
        <Link onClick={() => setShowNav(true)} className={itim.className} href={pathName === '/blogs' ? '/#projects' : '#projects'}>Projects</Link>
        <Link onClick={() => setShowNav(true)} className={itim.className} href={pathName === '/blogs' ? '/#contact' : '#contact'}>Contact</Link>
        <Link onClick={() => setShowNav(true)} className={itim.className} href={'mailto:hellogyanranjan@gmail.com'} type="email">Email</Link>
        <Link onClick={() => setShowNav(true)} className={itim.className} href='/blogs'>Blogs</Link>
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
