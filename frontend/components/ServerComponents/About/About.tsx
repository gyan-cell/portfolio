// components/clientComponents/About/About.tsx
"use client";

import { useState, useEffect } from "react";
import { Cormorant_Upright, Cormorant, Jim_Nightshade } from "next/font/google";
import "@/styles/about.css";

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

interface AboutData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  bio: string;
  education: {
    degree: string;
    institution: string;
    duration: string;
  };
  experience: Array<{
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
  }>;
  skills: {
    technical: string[];
    tools: string[];
  };
  languages: string[];
  accomplishments: string[];
  certifications: string[];
  projects: string[];
}

const About = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/about");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setAboutData(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching about data:", err);
      // Fallback to static data if API fails
      setAboutData(staticAboutData);
      setLoading(false);
    }
  };

  // Static fallback data
  const staticAboutData: AboutData = {
    personalInfo: {
      name: "Gyanranjan Jha",
      title: "Fullstack Developer and Security Analyst",
      location: "Boisar, Maharashtra, India",
      email: "hellogyanranjan@gmail.com",
      phone: "CAN'T Share OOpsie",
      github: "gyan-cell",
      linkedin: "gyanranjan-jha-7009b3256",
    },
    bio: "Dynamic full stack developer with hands-on experience at the Government of India, where I analyzed Android ecosystem challenges and contributed to security solutions. I excel in android application, web application development and penetration testing and I believe in getting Work Done in Efficient, organized and planned way devoting myself to an Objective until it is achieved.",
    education: {
      degree: "Bachelor of Engineering (C.S.E A.I.M.L)",
      institution: "Mumbai University",
      duration: "July 2022 to July 2026",
    },
    experience: [
      {
        title: "Intern",
        company: "Government Of India",
        location: "New Delhi",
        duration: "February 2025 to September 2025",
        description: [
          "Analyzed problems related to android and its ecosystem",
          "Worked with teams to develop security solutions",
        ],
      },
      {
        title: "Freelance Web Developer",
        company: "Self Employed",
        location: "Boisar",
        duration: "2022-2024",
        description: [
          "Built Various Websites Using MERN Stacks",
          "Contributed Significantly in designing, Development, and deployment of websites for various clients as a student",
        ],
      },
    ],
    skills: {
      technical: [
        "MERN Stack",
        "Python Development",
        "Java Programming",
        "MySQL and PostgreSQL",
        "JavaScript",
        "Docker Orchestration",
        "NextJs",
        "Django",
        "Web Application Penetration Testing",
        "Android Penetration Testing",
      ],
      tools: [
        "Burp Suite",
        "Metasploit",
        "Nmap",
        "SQLmap",
        "MobSF",
        "Frida",
        "Drozer",
        "JADX",
        "Ghidra",
      ],
    },
    languages: ["English", "Hindi", "Maithili", "Sanskrit"],
    accomplishments: [
      "Won Smart India Hackathon SIH(2024) in IIT JAMMU",
      "Ended up top 5 in various State Level Hackathons",
      "Received Thanks And Appreciation From Government Of India For Reporting Security Vulnerabilities and securing their Websites and Systems",
    ],
    certifications: [
      "Getting Started with Artificial Intelligence By IBM",
      "AWS Academy Graduate - Cloud Foundations - Training Badge",
      "AWS Academy Graduate - Cloud Web Application Builder - Training Badge",
      "AWS Academy Graduate - Data Engineering - Training Badge",
    ],
    projects: [
      "Framework for Vulnerability Analysis of Web Application",
      "Custom Web Reconnaissance and sub domain Enumerator",
      "Neovim Configuration in lua",
      "Full Stack E commerce App",
      "Custom Http Server with File Based Routing",
    ],
  };

  if (loading) {
    return (
      <div
        className={`about-loading ${jimNightshade.variable} ${cormorantUpright.variable} ${cormorant.variable}`}
      >
        <div className="loading-spinner"></div>
        <p>Loading biographical information...</p>
      </div>
    );
  }

  if (error || !aboutData) {
    return (
      <div
        className={`about-error ${jimNightshade.variable} ${cormorantUpright.variable} ${cormorant.variable}`}
      >
        <h2>Unable to load content</h2>
        <p>{error || "Please try again later"}</p>
      </div>
    );
  }

  return (
    <div
      className={`about ${jimNightshade.variable} ${cormorantUpright.variable} ${cormorant.variable}`}
      id="about"
    >
      {/* Newspaper Header */}
      <div className="newspaper-header">
        <div className="header-line"></div>
        <div className="header-date">
          <span className="date-text">THE DIGITAL CHRONICLE</span>
          <span className="edition-text">BIOGRAPHICAL EDITION</span>
        </div>
        <div className="header-line"></div>
      </div>

      <div className="about-container">
        {/* Main Article Header */}
        <div className="article-header">
          <div className="article-label">EXCLUSIVE PROFILE</div>
          <h1 className="article-headline">{aboutData.personalInfo.name}</h1>
          <h2 className="article-subheadline">
            {aboutData.personalInfo.title}
          </h2>
          <div className="article-byline">
            <span>Published: December 2024</span>
            <span>•</span>
            <span>Special Feature</span>
          </div>
        </div>

        {/* Bio Section - Lead Article */}
        <div className="lead-article">
          <div className="dropcap-wrapper">
            <span className="dropcap">{aboutData.bio.charAt(0)}</span>
            <p className="lead-text">{aboutData.bio.substring(1)}</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="about-columns">
          {/* Left Column */}
          <div className="about-column-left">
            {/* Contact Information Box */}
            <div className="info-box contact-box">
              <h3 className="box-title">Contact Information</h3>
              <div className="box-divider"></div>
              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>{aboutData.personalInfo.location}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>{aboutData.personalInfo.email}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>{aboutData.personalInfo.phone}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div>
                    <strong>LinkedIn</strong>
                    <p>{aboutData.personalInfo.linkedin}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🔧</span>
                  <div>
                    <strong>GitHub</strong>
                    <p>{aboutData.personalInfo.github}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="section-block">
              <h3 className="section-title">Education</h3>
              <div className="section-divider"></div>
              <div className="education-item">
                <h4 className="education-degree">
                  {aboutData.education.degree}
                </h4>
                <p className="education-institution">
                  {aboutData.education.institution}
                </p>
                <p className="education-duration">
                  {aboutData.education.duration}
                </p>
              </div>
            </div>

            {/* Languages Section */}
            <div className="section-block">
              <h3 className="section-title">Languages</h3>
              <div className="section-divider"></div>
              <div className="languages-grid">
                {aboutData.languages.map((lang, index) => (
                  <div key={index} className="language-tag">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Accomplishments Section */}
            <div className="section-block highlight-box">
              <h3 className="section-title">Notable Accomplishments</h3>
              <div className="section-divider"></div>
              <ul className="accomplishments-list">
                {aboutData.accomplishments.map((accomplishment, index) => (
                  <li key={index}>{accomplishment}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-column-right">
            {/* Experience Section */}
            <div className="section-block">
              <h3 className="section-title">Professional Experience</h3>
              <div className="section-divider"></div>
              {aboutData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4 className="experience-title">{exp.title}</h4>
                    <p className="experience-company">
                      {exp.company}, {exp.location}
                    </p>
                    <p className="experience-duration">{exp.duration}</p>
                  </div>
                  <ul className="experience-description">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="section-block">
              <h3 className="section-title">Technical Expertise</h3>
              <div className="section-divider"></div>
              <div className="skills-subsection">
                <h4 className="skills-subtitle">Core Technologies</h4>
                <div className="skills-grid">
                  {aboutData.skills.technical.map((skill, index) => (
                    <div key={index} className="skill-tag">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="skills-subsection">
                <h4 className="skills-subtitle">Security Tools</h4>
                <div className="skills-grid">
                  {aboutData.skills.tools.map((tool, index) => (
                    <div key={index} className="skill-tag tool-tag">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="section-block">
              <h3 className="section-title">Certifications</h3>
              <div className="section-divider"></div>
              <ul className="certifications-list">
                {aboutData.certifications.map((cert, index) => (
                  <li key={index}>
                    <span className="cert-marker">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Section */}
            <div className="section-block">
              <h3 className="section-title">Featured Projects</h3>
              <div className="section-divider"></div>
              <ul className="projects-list">
                {aboutData.projects.map((project, index) => (
                  <li key={index}>
                    <span className="project-number">{index + 1}.</span>
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newspaper Footer */}
      <div className="newspaper-footer">
        <div className="footer-line"></div>
        <div className="footer-info">
          <span>END OF ARTICLE</span>
          <span>THE DIGITAL CHRONICLE</span>
          <span>© 2024 GYANRANJAN JHA</span>
        </div>
      </div>
    </div>
  );
};

export default About;
