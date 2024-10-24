import React from 'react'
import "./contact.scss"
import ContactForm from './ContactForm'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { FaGithub } from 'react-icons/fa6'
import { itim } from '@/styles/fonts'

const ContactMe = () => {
  return (
    <div id='contact' className='contact'  >
      <div className='contactForm'>
        <ContactForm />
      </div>
      <div className='contactText'  >
        <h1 className={itim.className}  >Connect Me On</h1>
        <div className='contactIcons'  >
          <div className='circle' >
            <Link target='_blank' href={'https://github.com/gyan-cell'}><FaGithub /></Link>
          </div>
          <div className='circle' >
            <Link target='_blank' href={'https://www.linkedin.com/in/gyanranjan-jha-7009b3256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><Linkedin /></Link>
          </div>
          <div className='circle' >
            <Link target='_blank' href={'https://www.instagram.com/gyanranjan_01/'}><Instagram /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
