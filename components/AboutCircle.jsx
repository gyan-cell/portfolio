import React from 'react'
import { FaCpanel, FaLinux, FaNodeJs, FaReact, FaRust } from 'react-icons/fa'
import "../styles/aboutcircle.scss"
import { DiJavascript, DiJavascript1, DiMongodb, DiPython, IconName } from "react-icons/di";
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import {SiNextdotjs} from 'react-icons/si'
const AboutCircle = () => {

  return (
    <section class="main-container">
      <div class="main">
        <div class="big-circle">
          <div class="icon-block">
            <DiJavascript1 />
          </div>
          <div class="icon-block">
            <DiPython/>
          </div>
          <div class="icon-block">
            <AiOutlineCopyrightCircle />
          </div>
          <div class="icon-block">
            <FaRust />
          </div>
        </div>
        <div class="circle">
          <div class="icon-block">
            <FaReact />
          </div>
          <div class="icon-block">
            <SiNextdotjs />
          </div>
          <div class="icon-block">
            <DiMongodb />
          </div>
          <div class="icon-block">
            <FaNodeJs />
          </div>
        </div>
        <div class="center-logo">
          <FaLinux />
        </div>
      </div>
    </section>
  )

}

export default AboutCircle 
