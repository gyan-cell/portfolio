import { Button } from "@/components/ui/button";
import { caveat } from "@/styles/fonts";
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
];

const BlogsLiner = () => {
  return (
    <div id="blogsLiner" className="blogsLiner">
      {blogsTopic.map((blog) => (
        <div className="blogCard">
          <div className="blogText">
            <div className="blogTextHead">
              <span className={caveat.className}>{blog.title}</span>
              <span
                className={caveat.className + " w-full flex justify-center  "}
              >
                By Albert Camus
              </span>
              <Button className="blogButton">
                {" "}
                <Link href={blog.Link}>
                  <ArrowDown />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsLiner;
