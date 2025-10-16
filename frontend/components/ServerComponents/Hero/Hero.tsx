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
      {/* Newspaper Header Line */}
      <div className="hero-content">
        <div className="hero-text">
          {/* Main Heading with Newspaper Style */}
          <div className="headline-section">
            <div className="headline-marker">EXCLUSIVE</div>
            <h1 className="main-headline">
              <span className="headline-intro">Meet</span>
              <span className="headline-name">Gyanranjan Jha</span>
            </h1>
            <div className="headline-subtitle">
              Digital Craftsman & Security Sentinel
            </div>
          </div>

          {/* Byline */}

          {/* Profession List as Newspaper Columns */}
          <div className="profession-section">
            <div className="section-header">
              <h2 className="section-title">Areas of Expertise</h2>
              <div className="section-rule"></div>
            </div>

            <div className="profession-columns">
              <div className="profession-column">
                <div className="profession-item">
                  <span className="profession-marker">›</span>
                  <div className="profession-content">
                    <h3 className="profession-title">
                      Fullstack Web Developer
                    </h3>
                    <p className="profession-desc">
                      Crafting robust digital experiences with modern frameworks
                    </p>
                  </div>
                </div>
                <div className="profession-item">
                  <span className="profession-marker">›</span>
                  <div className="profession-content">
                    <h3 className="profession-title">Web Penetration Tester</h3>
                    <p className="profession-desc">
                      Fortifying web applications against modern threats
                    </p>
                  </div>
                </div>
              </div>

              <div className="profession-column">
                <div className="profession-item">
                  <span className="profession-marker">›</span>
                  <div className="profession-content">
                    <h3 className="profession-title">
                      Fullstack App Developer
                    </h3>
                    <p className="profession-desc">
                      Building seamless mobile and desktop applications
                    </p>
                  </div>
                </div>
                <div className="profession-item">
                  <span className="profession-marker">›</span>
                  <div className="profession-content">
                    <h3 className="profession-title">
                      Android Penetration Tester
                    </h3>
                    <p className="profession-desc">
                      Securing mobile ecosystems through rigorous testing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action - Newspaper Style */}
          <div className="cta-section">
            <div className="cta-divider"></div>
            <div className="cta-content">
              <p className="cta-lead">
                "In an era of digital transformation, I bridge the gap between
                innovative development and ironclad security."
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Read Full Profile</button>
                <button className="btn btn-secondary">Download CV</button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-frame">
            <Lottie />
          </div>
          <div className="visual-caption">
            <em>Digital innovation meets security excellence</em>
          </div>
        </div>
      </div>

      {/* Newspaper Footer */}
      <div className="newspaper-footer">
        <div className="footer-line"></div>
        <div className="footer-info">
          <span>CONTINUED ON PAGE A2</span>
          <span>THE DIGITAL CHRONICLE</span>
          <span>VOL. 3, NO. 12</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
