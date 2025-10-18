// components/clientComponents/Hero/Hero.tsx
"use client";

import Lottie from "@/components/clientComponents/Hero/Lottie";
import { Cormorant_Upright, Cormorant, Jim_Nightshade } from "next/font/google";
import "@/styles/hero.css";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-upright",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const jimNightshade = Jim_Nightshade({
  weight: "400",
  style: "normal",
  variable: "--font-jim-nightshade",
});

const Hero = () => {
  return (
    <div
      className={`hero ${jimNightshade.variable} ${cormorantUpright.variable} ${cormorant.variable}`}
      id="hero"
    >
      {/* Newspaper Header */}
      <div className="newspaper-header">
        <div className="header-line"></div>
        <div className="header-date">
          <span className="date-text">THE DIGITAL CHRONICLE</span>
          <span className="edition-text">PORTFOLIO EDITION</span>
        </div>
        <div className="header-line"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          {/* Main Heading */}
          <div className="headline-section">
            <div className="headline-marker">INTRODUCTION</div>
            <h1 className="main-headline">
              <span className="headline-intro">Meet</span>
              <span className="headline-name">Gyanranjan Jha</span>
            </h1>
            <div className="headline-subtitle">
              Fullstack Developer & Security Analyst
            </div>
          </div>

          {/* Byline */}
          <div className="byline">
            <span className="byline-text">Featured Profile</span>
            <span className="byline-separator">•</span>
            <span className="byline-location">Boisar, Maharashtra</span>
            <span className="byline-separator">•</span>
            <span>December 2024</span>
          </div>

          {/* Profession List */}
          <div className="profession-section">
            <div className="section-header">
              <h2 className="section-title">Areas of Expertise</h2>
              <div className="section-divider"></div>
            </div>

            <div className="profession-columns">
              <div className="profession-column">
                <div className="profession-item">
                  <span className="profession-marker">›</span>
                  <div className="profession-content">
                    <h3 className="profession-title">
                      Fullstack Web Development
                    </h3>
                    <p className="profession-desc">
                      Building web applications using MERN Stack, NextJs, and
                      modern frameworks
                    </p>
                  </div>
                </div>

                <div className="profession-item">
                  <span className="profession-marker">›</span>
                  <div className="profession-content">
                    <h3 className="profession-title">
                      Web Penetration Testing
                    </h3>
                    <p className="profession-desc">
                      Identifying and securing web applications against
                      vulnerabilities
                    </p>
                  </div>
                </div>

                <div className="profession-item">
                  <span className="profession-marker">›</span>
                  <div className="profession-content">
                    <h3 className="profession-title">
                      Fullstack App Development
                    </h3>
                    <p className="profession-desc">
                      Creating mobile and desktop applications with seamless
                      experiences
                    </p>
                  </div>
                </div>

                <div className="profession-item">
                  <span className="profession-marker">›</span>
                  <div className="profession-content">
                    <h3 className="profession-title">
                      Android Penetration Testing
                    </h3>
                    <p className="profession-desc">
                      Analyzing Android applications for security
                      vulnerabilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <div className="cta-divider"></div>
            <div className="cta-content">
              <p className="cta-lead">
                Passionate about building secure, efficient solutions and
                contributing to projects that make a difference. Open to
                opportunities and collaborations.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary">View Portfolio</button>
                <button className="btn btn-secondary">Download CV</button>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Section */}
        <div className="hero-visual">
          <div className="visual-frame">
            <Lottie />
          </div>
          <div className="visual-caption">
            Building secure digital solutions with modern technologies
          </div>
        </div>
      </div>

      {/* Newspaper Footer */}
      <div className="newspaper-footer">
        <div className="footer-line"></div>
        <div className="footer-info">
          <span>CONTINUED BELOW</span>
          <span>THE DIGITAL CHRONICLE</span>
          <span>DECEMBER 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
