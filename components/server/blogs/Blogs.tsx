import { caveat, itim } from '@/styles/fonts'
import Image from 'next/image'
import React from 'react'
import image from '@/images/wallhaven-ym7237.png'

const BlogsHead = () => {
  return (
    <div id='blogsHead' className='blogsHead' >
      <div className='blogBackground'  >
        <Image src={image} alt="blog image" className='blogImg' />
        <div className='blogText'  >
          <div className={'blogTextHead'}  >
            <span className={caveat.className}  >A man's work is nothing but this slow trek to rediscover, through the detours of art, those two or three great and simple images in whose presence his heart first opened. </span>
            <span className={caveat.className + ' w-full flex justify-center  '}  >By  Albert Camus</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsHead
