'use client'

import React from 'react'
import style from '../styles/projects.scss'
import Image from 'next/image'
import img from '../public/contactcover.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/projects.scss'
import 'swiper/css';
import 'swiper/modules'

// import required modules
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link'
const projects = [
  {
    name: "My Portfolio",
    technology: "Nextjs",
    description: "Step into my Next.js portfolio, project combines server-side rendering, static site generation, and client-side interactivity for optimal performance and SEO benefits. Next.js has been my go-to tool for crafting scalable and efficient web solutions.From e-commerce platforms to interactive dashboards, these projects exemplify my expertise in utilizing Next.js to deliver top-notch user experiences. Dive into the codebase, and witness the technical prowess behind these cutting-edge web applications.",
    link: "http://localhost:3000",
    image: "https://picsum.photos/200"
  },
  {
    name: "ecommerce ",
    technology: "MERN",
    description: " Powered by MongoDB, Express, React, and Node.js, this platform brings a seamless shopping experience to users and empowers sellers with easy management tools. With a secure and scalable architecture, the website handles transactions flawlessly, ensuring peace of mind for both buyers and sellers.With a secure and scalable architecture, the website handles transactions flawlessly, ensuring peace of mind for both buyers and sellers.User Interface is Simple Because I was Focused on Functionality.. ",
    link: "https://ssenterprises.tech/",
    image: "https://picsum.photos/200"
  },
  {
    name: "Neovim Config",
    technology: "Lua",
    description: "Welcome to my optimized Neovim configuration, meticulously fine-tuned for peak coding performance. Harness the power of intelligent language servers, autocomplete, and syntax highlighting for a frictionless coding experience. Navigate your codebase effortlessly with fuzzy file searching and real-time project-wide search. Streamlined keybindings and extensible Vimscript combined with Lua supercharge your productivity. Embrace a distraction-free interface that keeps your focus razor-sharp on your code.",
    link: "https://github.com/gyan-cell/nvim",
    image: "https://picsum.photos/200"
  },
  {
    name: "Weather App",
    technology: "javascript",
    description: "Experience the weather like never before with my small yet powerful weather application. Using HTML, CSS, and JavaScript, this app fetches real-time weather updates, giving you instant access to the current weather conditions of any location. Enjoy a clean and intuitive interface that makes checking the weather a breeze. From temperature and humidity to wind speed and conditions, all the essential weather data is at your fingertips. ",
    link: "https://physicspro.vercel.app/",
    image: "https://picsum.photos/200"
  },
  {
    name: "Video Hub",
    technology: "Reactjs",
    description: "Welcome to my React-powered video sharing app! With this frontend project, users can effortlessly upload and view videos. Leveraging the power of React, the app offers a smooth and dynamic user experience, making video uploads and browsing a breeze. Discover the beauty of seamless video sharing and immersive viewing in this interactive platform, designed to connect people through the art of multimedia.",
    link: "https://videohub-black.vercel.app/",
    image: "https://picsum.photos/200",

  }
]


const Projects = () => {
  return (
    <div id='project' >
      <div className='project'  >
        <Image
          className={style.image}
          fill
          style={{
            objectFit: "cover"
          }}
          alt='random'
          src={img}
        />
        <div className='projectContainer'   >
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            pagination={true}
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCards]}
          >
            {
              projects.map((items) => {
                return (
                  <SwiperSlide>
                    <div className='projectCard'  >
                      <div className='details' >
                        <div className='name' >
                          <div className='rn'  >Projects / {items.name} using {items.technology}  </div>
                        </div>
                        <p className='des' >{items.description}</p>
                        <div className='link' ><Link href={items.link} >Link</Link> </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Projects   
