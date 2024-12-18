import React from "react";
import "./about.scss";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/images/WhatsApp Image 2024-12-18 at 23.27.57.jpeg";

const BasicAbout = () => {
  return (
    <div id="aboutStart" className="aboutSection">
      <div className="aboutDetails">
        <h1 className="aboutHeading">
          About <span className="me">Me</span>
        </h1>
        <p className="aboutPara">
          I am an undergraduate student pursuing a degree in Computer Science.
        </p>
        <ul>
          <li className="aboutList">Winner Of Smart India Hackathon</li>
          <li className="aboutList">
            Top 5 in GDSC held in Atharva college of engineering
          </li>
          <li className="aboutList">
            Currently Working as a Full Stack freelance Developer
          </li>
          <li className="aboutList">Open Source Contributor</li>
          <li className="aboutList">
            Get My Full Details <Button variant="link">Download Resume</Button>
          </li>
        </ul>
      </div>
      <div className="aboutEmoji">
        <Image src={image} alt="image" width={500} height={500} />
      </div>
    </div>
  );
};

export default BasicAbout;
