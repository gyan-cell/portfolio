import React from 'react'
import NavElements from '../../client/NavElements'
import Link from 'next/link'
import "./Navbar.scss"
import { caveat, itim } from '@/styles/fonts'



const Navbar = () => {
  return (
    <nav   >
      <div className='icon'  >
        <Link className={caveat.className} href='/'>Gyanranjan Jha</Link>
      </div>
      <NavElements />
    </nav>
  )
}

export default Navbar
