import BlogsHead from '@/components/server/blogs/Blogs'
import React from 'react'
import './blogs.scss'
import BlogsCategory from '@/components/server/blogs/blogsCategory/BlogsCategory'

const page = () => {
  return (
    <>
      <BlogsHead />
      <BlogsCategory />
    </>
  )
}

export default page
