import React from 'react'
import NavElements from '../../client/NavElements'
import Link from 'next/link'
import "./Navbar.scss"



const Navbar = () => {
  return (
    <nav   >
      <div className='icon'  >
        <Link href='/'>Gyanranjan Jha</Link>
      </div>
      <NavElements />
    </nav>
  )
}

export default Navbar
