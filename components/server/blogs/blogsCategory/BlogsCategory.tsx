import React from 'react'
import "./category.scss"
import { roboto } from '@/styles/fonts'
import BlogsCategoryMap from '@/components/client/blogs/BlogsCategoryMap'
import { BentoGridDemo } from './BentoBlogsGrid'
import BlogsLine from './BlogsLine'

const BlogsCategory = () => {
  return (
    <div className="blogsCategory"  >
      <div className="blogsCategory__title">
        <h1 className={roboto.className}  >What Would You Like To Read About ?</h1>
      </div>
      <BlogsCategoryMap />
      <div className='blogsSample'  >
        <BlogsLine />
      </div>
    </div>
  )
}

export default BlogsCategory
