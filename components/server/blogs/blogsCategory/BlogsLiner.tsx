import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { caveat, itim } from "@/styles/fonts";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const blogsTopic = [
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: "https://via.placeholder.com/300",
    category: "Others",
    uniqueId: 1,
    Link: "/blogs/1",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: "https://via.placeholder.com/300",
    category: "Others",
    uniqueId: 2,
    Link: "/blogs/2",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: "https://via.placeholder.com/300",
    category: "Others",
    uniqueId: 2,
    Link: "/blogs/2",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: "https://via.placeholder.com/300",
    category: "Others",
    uniqueId: 2,
    Link: "/blogs/2",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: "https://via.placeholder.com/300",
    category: "Others",
    uniqueId: 2,
    Link: "/blogs/2",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: "https://via.placeholder.com/300",
    category: "Others",
    uniqueId: 2,
    Link: "/blogs/2",
  },
];

const BlogsLiner = () => {
  return (
    <div id="blogsLiner" className="blogsLiner">
      <div className="blogHead">
        <div className="search">
          <input className={itim.className} type="text" placeholder="Search" />
          <Button className={itim.className}>
            <MagnifyingGlassIcon />
          </Button>
        </div>
      </div>
      <div className="blogCardContainer">
        {blogsTopic.map((blog) => (
          <div className="blogCard">
            <div className="blogCard__title">
              <h1 className={caveat.className}>{blog.title}</h1>
            </div>
            <div className="blogCard__description">
              <p className={caveat.className}>{blog.description}</p>
            </div>
            <div className="blogCard__category">
              <p className={caveat.className}>{blog.category}</p>
            </div>
            <div className="blogCard__button">
              <Button className={caveat.className}>
                <Link href={`${blog.category}/${blog.Link}`}>Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsLiner;
