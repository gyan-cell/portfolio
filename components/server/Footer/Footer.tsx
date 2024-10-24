import React from 'react'
import "./footer.scss"
import { ArrowUp, PanelTop } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (

    <footer>
      <div className='footerCard'  >@Gyanranjan Jha</div>
      <div className='scrollToTop'  ><Link href='#'><ArrowUp /></Link></div>
    </footer>

  )
}

export default Footer
