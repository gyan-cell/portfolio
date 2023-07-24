import React from 'react'
import "../styles/navbar.scss"
import Link from 'next/link'
import Navelements from '@/clientComponents/Navelements'

const Navbar = () => {
  return (
    <nav>
      <div className='logo' >
        GyanRanJan...
      </div>
      <Navelements />
    </nav>
  )
}

export default Navbar
