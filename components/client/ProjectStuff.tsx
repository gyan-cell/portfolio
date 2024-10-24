"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import image from '@/images/demo0.jpeg'
import image1 from '@/images/demo1.png'
import { Button } from '../ui/button';
import Link from 'next/link';


import parse from 'html-react-parser';
import { itim } from '@/styles/fonts';
const projectArray = [
  {
    name: "Neovim Configuration",
    desc: "Oblivion-vim is a lightweight and minimal NeoVim configuration written in Lua. It aims to provide essential features for a smooth and efficient coding experience.",
    desc2: "<ul><li>Neovim Configuration</li><li>LSP (Language Server Protocol)</li><li>TreeSitter</li><li>File tree navigation</li><li>GitHub Copilot-like code assistance</li></ul>",
    image: image,
    sourceCode: "https://github.com/gyan-cell/nvim",
    livePreview: "https://github.com/gyan-cell/nvim"
  },
  {
    name: "I3 Wimdow Manager   Configuration",
    desc: "I3 Configuration For Linux Based Distributions With A Minimalistic Look Yet Extremely Functional And It Looks Beautiful .",
    desc2: "<ul><li>I3 WM  Configuration</li><li>WAllpaper Gui Application Can Be Used. (Nitrogen)</li><li>Compatible With Any Linux Distribution</li><li>Uses BumbleBee Status bar</li><li>I Would Recommend Kitty as Terminal</li></ul>",
    image: image1,
    sourceCode: "https://github.com/gyan-cell/All-Config",
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
              <div className={`projectSlideContainer ${itim.className}`} >
                <div className='projectSlide'  >
                  <div className='slideImage'  >
                    <Image src={item.image} alt={item.name} />
                  </div>
                  <div className='projectSlideText'>
                    <div className='heading'  >
                      <h3>{item.name}</h3>
                    </div>
                    <div className='desc'  >
                      <p>{item.desc}</p>
                      {item.desc2 && parse(`${item.desc2 as string}`)
                      }
                    </div>
                    <div className='links'  >
                      <Button variant="default" size="sm" asChild>
                        <Link href={item.sourceCode} target='_blank'  >Source Code</Link>
                      </Button>
                      {
                        item.livePreview && <Button variant="default" size="sm" asChild><Link href={item.livePreview}>Live Preview</Link></Button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>)
        })
      }
    </Swiper>
  </>

  )
}

export default ProjectStuff
