import BlogsHead from "@/components/server/blogs/Blogs";
import React from "react";
import "./blogs.scss";
import BlogsLiner from "@/components/server/blogs/blogsCategory/BlogsLiner";

const page = () => {
  return (
    <>
      <BlogsHead />
      <BlogsLiner />
    </>
  );
};

export default page;
