"use client"

import { Button } from '@/components/ui/button'
import React from 'react'


const blogsCategories: string[] = ["All", "Frontend", "Backend", "Machine Learning", "Data Science", "Miscellaneous Tech", "Cinema", "Others"]

const CategoryMapped = () => {
  const [acriveCategory, setActiveCategory] = React.useState(0)
  return blogsCategories.map((category) => {
    return (
      <Button className="blogsCategoryMap__button"
        type='button' key={category}
        onClick={() => setActiveCategory(blogsCategories.indexOf(category))}
        variant={acriveCategory === blogsCategories.indexOf(category) ? "default" : "outline"}
      >
        {category}
      </Button>
    )
  })
}

const BlogsCategoryMap = () => {

  return (
    <div className='blogsCategory__category'  >
      <CategoryMapped />
    </div>
  )
}

export default BlogsCategoryMap
