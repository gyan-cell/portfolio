import { Button } from '@/components/ui/button'
import { roboto } from '@/styles/fonts'
import Link from 'next/link'
import React from 'react'


const blogsArticle = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    category: "Others",
    uniqueId: 1,
    Link: "/blogs/1"
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    category: "Frontend",
    uniqueId: 2,
    Link: "/blogs/2"
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    category: "Backend",
    uniqueId: 3,
    Link: "/blogs/3"
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    category: "Machine Learning",
    uniqueId: 4,
    Link: "/blogs/4"
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    category: "Data Science",
    uniqueId: 5,
    Link: "/blogs/5"
  },
  {
    title: "The Impact of Innovation",
    description: "Discover the transformative power of innovation. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    category: "Others",
    uniqueId: 6,
    Link: "/blogs/6"
  },
  {
    title: "The Evolution of Technology",
    description: "Explore the rapidly changing landscape of technology.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    category: "Others",
    uniqueId: 7,
    Link: "/blogs/7"
  },
]


const BlogsLineMap = () => {
  return (
    blogsArticle.map((article, i) => {
      return (
        <div className="blogsLine"  >
          <div className="blogsLine__title">
            <h1 className={roboto.className}  >{article.title}</h1>
          </div>
          <div className="blogsLine__description">
            <p className={roboto.className}  >{article.description}</p>
          </div>
          {/* <div className="blogsLine__category"> */}
          {/*   <p className={roboto.className}  >{article.category}</p> */}
          {/* </div> */}
          <div className="blogsLine__button">
            <Button className={roboto.className}  ><Link href={`${article.category}/${article.Link}`} >Read More</Link></Button>
          </div>
        </div>
      )
    })
  )
}

const BlogsLine = () => {
  return (
    <div>Sy</div>
  )
}

export default BlogsLine
