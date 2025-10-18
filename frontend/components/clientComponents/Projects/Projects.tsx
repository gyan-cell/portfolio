// components/clientComponents/Projects/Projects.tsx
"use client";

import { useState, useEffect } from "react";
import { Cormorant_Upright, Cormorant, Jim_Nightshade } from "next/font/google";
import "@/styles/project.css";

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

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  details: string[];
  technologies: string[];
  liveLink?: string;
  sourceCode?: string;
  image?: string;
  featured: boolean;
  date: string;
}

interface ProjectsData {
  projects: Project[];
}

const Projects = () => {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    fetchProjectsData();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !projectsData) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, projectsData]);

  const fetchProjectsData = async () => {
    try {
      const response = await fetch("/api/projects");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setProjectsData(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching projects data:", err);
      setProjectsData(staticProjectsData);
      setLoading(false);
    }
  };

  const staticProjectsData: ProjectsData = {
    projects: [
      {
        id: 1,
        title: "Framework for Vulnerability Analysis of Web Application",
        category: "Security Research",
        description:
          "Comprehensive security framework for automated vulnerability detection and analysis in web applications.",
        details: [
          "Automated scanning and detection of common web vulnerabilities",
          "Custom payload generation for testing",
          "Detailed vulnerability reporting with severity classification",
          "Integration with popular security tools",
        ],
        technologies: [
          "Python",
          "Burp Suite",
          "OWASP",
          "SQLmap",
          "Custom Scripts",
        ],
        sourceCode: "https://github.com/gyan-cell/vulnerability-framework",
        featured: true,
        date: "2024",
      },
      {
        id: 2,
        title: "Custom Web Reconnaissance and Subdomain Enumerator",
        category: "Security Tool",
        description:
          "Advanced reconnaissance tool for discovering subdomains and gathering intelligence on web infrastructure.",
        details: [
          "Multi-threaded subdomain enumeration",
          "DNS record analysis and validation",
          "Port scanning and service detection",
          "Export results in multiple formats",
        ],
        technologies: [
          "Python",
          "DNS Tools",
          "Nmap",
          "API Integration",
          "Threading",
        ],
        sourceCode: "https://github.com/gyan-cell/recon-tool",
        featured: true,
        date: "2024",
      },
      {
        id: 3,
        title: "Neovim Configuration in Lua",
        category: "Development Tool",
        description:
          "Highly optimized and customized Neovim configuration for efficient coding workflow.",
        details: [
          "Custom key mappings for enhanced productivity",
          "LSP integration for multiple languages",
          "Beautiful and functional UI customization",
          "Plugin management and optimization",
        ],
        technologies: [
          "Lua",
          "Neovim",
          "LSP",
          "TreeSitter",
          "Plugin Ecosystem",
        ],
        sourceCode: "https://github.com/gyan-cell/nvim-config",
        featured: false,
        date: "2023",
      },
      {
        id: 4,
        title: "Full Stack E-commerce Application",
        category: "Web Development",
        description:
          "Complete e-commerce platform with modern features and secure payment integration.",
        details: [
          "User authentication and authorization",
          "Product catalog with search and filtering",
          "Shopping cart and checkout system",
          "Admin dashboard for inventory management",
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
        liveLink: "https://ecommerce-demo.vercel.app",
        sourceCode: "https://github.com/gyan-cell/ecommerce-app",
        featured: true,
        date: "2024",
      },
      {
        id: 5,
        title: "Custom HTTP Server with File-Based Routing",
        category: "Backend Development",
        description:
          "Lightweight HTTP server implementation with intuitive file-based routing system.",
        details: [
          "Zero-dependency HTTP server implementation",
          "Automatic route generation from file structure",
          "Middleware support for request processing",
          "Static file serving with caching",
        ],
        technologies: [
          "Node.js",
          "JavaScript",
          "HTTP Protocol",
          "File System API",
        ],
        sourceCode: "https://github.com/gyan-cell/http-server",
        featured: false,
        date: "2023",
      },
    ],
  };

  const handleNext = () => {
    if (!projectsData) return;
    setCurrentIndex((prev) =>
      prev === projectsData.projects.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    if (!projectsData) return;
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.projects.length - 1 : prev - 1,
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (loading) {
    return (
      <div
        className={`projects-loading ${jimNightshade.variable} ${cormorantUpright.variable} ${cormorant.variable}`}
      >
        <div className="loading-spinner"></div>
        <p>Loading project archives...</p>
      </div>
    );
  }

  if (!projectsData || projectsData.projects.length === 0) {
    return (
      <div
        className={`projects-error ${jimNightshade.variable} ${cormorantUpright.variable} ${cormorant.variable}`}
      >
        <h2>No Projects Found</h2>
        <p>Project archives are currently unavailable</p>
      </div>
    );
  }

  const currentProject = projectsData.projects[currentIndex];

  return (
    <div
      className={`projects ${jimNightshade.variable} ${cormorantUpright.variable} ${cormorant.variable}`}
      id="projects"
    >
      {/* Newspaper Header */}
      <div className="newspaper-header">
        <div className="header-line"></div>
        <div className="header-date">
          <span className="date-text">PROJECT CHRONICLES</span>
          <span className="edition-text">PORTFOLIO SHOWCASE</span>
        </div>
        <div className="header-line"></div>
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="section-label">FEATURED WORKS</div>
          <h1 className="section-headline">Project Archives</h1>
          <p className="section-lead">
            A curated collection of development projects, security research, and
            technical innovations
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          <div className="carousel-frame">
            {/* Navigation Buttons */}
            <button
              className="carousel-nav carousel-nav-prev"
              onClick={handlePrev}
              onMouseEnter={() => setIsAutoPlaying(false)}
              aria-label="Previous project"
            >
              <span className="nav-arrow">‹</span>
            </button>

            {/* Project Card */}
            <div className="project-card">
              {/* Project Header */}
              <div className="project-header">
                <div className="project-meta">
                  <span className="project-number">
                    PROJECT #{currentProject.id}
                  </span>
                  <span className="project-date">{currentProject.date}</span>
                </div>
                <div className="project-category-badge">
                  {currentProject.category}
                </div>
              </div>

              <div className="project-divider"></div>

              {/* Project Title */}
              <h2 className="project-title">{currentProject.title}</h2>

              {/* Project Description */}
              <p className="project-description">
                {currentProject.description}
              </p>

              {/* Project Details */}
              <div className="project-details">
                <h3 className="details-title">Key Features</h3>
                <ul className="details-list">
                  {currentProject.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="project-technologies">
                <h3 className="tech-title">Technologies Used</h3>
                <div className="tech-tags">
                  {currentProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                {currentProject.liveLink && (
                  <a
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn btn-live"
                  >
                    <span className="btn-icon">🔗</span>
                    View Live
                  </a>
                )}
                {currentProject.sourceCode && (
                  <a
                    href={currentProject.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn btn-source"
                  >
                    <span className="btn-icon">{"</>"}</span>
                    Source Code
                  </a>
                )}
              </div>

              {/* Featured Badge */}
              {currentProject.featured && (
                <div className="featured-badge">
                  <span>★</span> FEATURED
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <button
              className="carousel-nav carousel-nav-next"
              onClick={handleNext}
              onMouseEnter={() => setIsAutoPlaying(false)}
              aria-label="Next project"
            >
              <span className="nav-arrow">›</span>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {projectsData.projects.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="project-counter">
            <span className="counter-current">{currentIndex + 1}</span>
            <span className="counter-separator">/</span>
            <span className="counter-total">
              {projectsData.projects.length}
            </span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="quick-nav">
          <h3 className="quick-nav-title">All Projects</h3>
          <div className="quick-nav-grid">
            {projectsData.projects.map((project, index) => (
              <button
                key={project.id}
                className={`quick-nav-item ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              >
                <span className="quick-nav-number">#{project.id}</span>
                <span className="quick-nav-name">{project.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Newspaper Footer */}
      <div className="newspaper-footer">
        <div className="footer-line"></div>
        <div className="footer-info">
          <span>MORE PROJECTS ON GITHUB</span>
          <span>THE DIGITAL CHRONICLE</span>
          <span>PORTFOLIO 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
