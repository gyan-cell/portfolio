"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const projectArray = [
  {
    name: "Neovim Configuration",
    desc: "Neovim Configuration",
    image: "/images/wallhaven-p2myjp.jpg",
    sourceCode: "https://github.com/gyan-cell/nvim",
    livePreview: "https://gyan-cell.github.io/nvim/"
  },
  {
    name: "Neovim Configuration",
    desc: "Neovim Configuration",
    image: "/images/wallhaven-p2myjp.jpg",
    sourceCode: "https://github.com/gyan-cell/nvim",
    livePreview: "https://gyan-cell.github.io/nvim/"
  }
  ,
  {
    name: "Neovim Configuration",
    desc: "Neovim Configuration",
    image: "/images/wallhaven-p2myjp.jpg",
    sourceCode: "https://github.com/gyan-cell/nvim",
    livePreview: "https://gyan-cell.github.io/nvim/"
  }

]

const ProjectStuff = () => {


  return (<>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {
        projectArray.map((item, index) => {
          return (
            <SwiperSlide
              key={index}>
              <div className='projectSlideContainer' >{item.name}</div>
            </SwiperSlide>)
        })
      }
    </Swiper>
  </>

  )
}

export default ProjectStuff
