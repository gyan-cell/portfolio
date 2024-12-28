import { Button } from "@/components/ui/button";
import { caveat, itim } from "@/styles/fonts";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import image from "@/images/wallhaven-5w1627.jpg";
import Image from "next/image";

const blogsTopic = [
  {
    title: "Industrial society And its Failures",
    description: `The Industrial Revolution and its consequences have been a disaster Tor the human race. They
have greatly increased the life-expectancy of those of us who live in advanced countries,
but they hitvc destabilized society, have made life unfulfilling, have subjected human beings
to indignities, have led to widespread psychological suffering (in the Third World to physical
suffering as well) and have inflicted severe damage on the natural world. The continued
development of technology will worsen the situation. Il will certainly subject human beings
lo greater indignities and inflict greater damage on the natural world, it will probably lead to
greater social disruption and psychological suffering, and it may lead to increased physical
suffering even in advanced countries."`,
    image: image,
    category: "Others",
    uniqueId: 1,
    Link: "/blogs/1",
  },

  {
    title: "Industrial society And its Failures",
    description: `The Industrial Revolution and its consequences have been a disaster Tor the human race. They
have greatly increased the life-expectancy of those of us who live in advanced countries,
but they hitvc destabilized society, have made life unfulfilling, have subjected human beings
to indignities, have led to widespread psychological suffering (in the Third World to physical
suffering as well) and have inflicted severe damage on the natural world. The continued
development of technology will worsen the situation. Il will certainly subject human beings
lo greater indignities and inflict greater damage on the natural world, it will probably lead to
greater social disruption and psychological suffering, and it may lead to increased physical
suffering even in advanced countries."`,
    image: image,
    category: "Others",
    uniqueId: 1,
    Link: "/blogs/1",
  },

  {
    title: "Industrial society And its Failures",
    description: `The Industrial Revolution and its consequences have been a disaster Tor the human race. They
have greatly increased the life-expectancy of those of us who live in advanced countries,
but they hitvc destabilized society, have made life unfulfilling, have subjected human beings
to indignities, have led to widespread psychological suffering (in the Third World to physical
suffering as well) and have inflicted severe damage on the natural world. The continued
development of technology will worsen the situation. Il will certainly subject human beings
lo greater indignities and inflict greater damage on the natural world, it will probably lead to
greater social disruption and psychological suffering, and it may lead to increased physical
suffering even in advanced countries."`,
    image: image,
    category: "Others",
    uniqueId: 1,
    Link: "/blogs/1",
  },

  {
    title: "Industrial society And its Failures",
    description: `The Industrial Revolution and its consequences have been a disaster Tor the human race. They
have greatly increased the life-expectancy of those of us who live in advanced countries,
but they hitvc destabilized society, have made life unfulfilling, have subjected human beings
to indignities, have led to widespread psychological suffering (in the Third World to physical
suffering as well) and have inflicted severe damage on the natural world. The continued
development of technology will worsen the situation. Il will certainly subject human beings
lo greater indignities and inflict greater damage on the natural world, it will probably lead to
greater social disruption and psychological suffering, and it may lead to increased physical
suffering even in advanced countries."`,
    image: image,
    category: "Others",
    uniqueId: 1,
    Link: "/blogs/1",
  },

  {
    title: "Industrial society And its Failures",
    description: `The Industrial Revolution and its consequences have been a disaster Tor the human race. They
have greatly increased the life-expectancy of those of us who live in advanced countries,
but they hitvc destabilized society, have made life unfulfilling, have subjected human beings
to indignities, have led to widespread psychological suffering (in the Third World to physical
suffering as well) and have inflicted severe damage on the natural world. The continued
development of technology will worsen the situation. Il will certainly subject human beings
lo greater indignities and inflict greater damage on the natural world, it will probably lead to
greater social disruption and psychological suffering, and it may lead to increased physical
suffering even in advanced countries."`,
    image: image,
    category: "Others",
    uniqueId: 1,
    Link: "/blogs/1",
  },

  {
    title: "Industrial society And its Failures",
    description: `The Industrial Revolution and its consequences have been a disaster Tor the human race. They
have greatly increased the life-expectancy of those of us who live in advanced countries,
but they hitvc destabilized society, have made life unfulfilling, have subjected human beings
to indignities, have led to widespread psychological suffering (in the Third World to physical
suffering as well) and have inflicted severe damage on the natural world. The continued
development of technology will worsen the situation. Il will certainly subject human beings
lo greater indignities and inflict greater damage on the natural world, it will probably lead to
greater social disruption and psychological suffering, and it may lead to increased physical
suffering even in advanced countries."`,
    image: image,
    category: "Others",
    uniqueId: 1,
    Link: "/blogs/1",
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
          <div className="padding">
            <div className="blogCard">
              <div className="blogCard__image">
                <Image src={blog.image} alt={blog.title} />
              </div>
              <div className="blogCard__title">
                <h1 className={itim.className}>{blog.title}</h1>
              </div>
              <div className="blogCard__description">
                <p className={itim.className}>{blog.description}</p>
              </div>
              <div className="blogCard__category">
                <Button className={itim.className}>
                  <Link href={`${blog.category}/`}>{blog.category}</Link>
                </Button>
              </div>
              <div className="blogCard__button">
                <Button className={itim.className}>
                  <Link href={`${blog.category}/${blog.Link}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsLiner;
