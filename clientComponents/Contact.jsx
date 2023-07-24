'use client'

import React, { useRef } from 'react'
import style from '../styles/contact.scss'
import Image from 'next/image'
import img from '../public/contactcover1.jpg'
import { BiSolidMessageDetail, BiSolidMessageRoundedDetail, BiSolidMessageSquareCheck, BiSolidMessageSquareDetail, BiSolidMessageX } from 'react-icons/bi'
import { Toaster, toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qnmoypd', 'template_qi8u84n', form.current, 'lgjNrCY7oDRDI7tkn')
      .then((result) => {
        toast.success("Message Sent!")
        console.log("sent")
      }, (error) => {
        toast.error(error.text)
        console.log(error.text);
      });
  };
  return (
    <div id='contact'  >
      <div className='contact'   >
        <Image
          className={style.rimg}
          alt='ContactCover image'
          src={img}
          fill
          style={{
            objectFit: "cover",
            backgroundColor: "white"
          }}
        />
        <div className='contact1'>
          <h2>Message Me</h2>
          <form ref={form} onSubmit={sendEmail}  >
            <input placeholder='Please Enter Your Name' name='user_name' required type='text' />
            <input placeholder='Please Enter Your Email' name='user_email' required type='email' />
            <input placeholder='Please Enter Your Message' name='user_message' required type='text' />
            <div className='btn' >
              <button type='submit'  > <BiSolidMessageSquareDetail />  Send</button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Contact
