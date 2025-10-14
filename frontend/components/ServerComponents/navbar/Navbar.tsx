// components/Navbar.tsx (updated with mobile menu)
"use client";

import NavbarClient from "@/components/clientComponents/Navbar/NavbarClient";
import "@/styles/navbar.css";
import { Cormorant_Upright, Jim_Nightshade } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import localFont from "next/font/local";
import Link from "next/link";

// Jim Nightshade local font setup
const jimNightshade = Jim_Nightshade({
  weight: "400",
  style: "normal",
  variable: "--font-jim-nightshade",
});

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-upright",
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []); // This will close menu on any route change

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
  ];

  const handleContactClick = () => {
    // Add your contact logic here
    console.log("Contact clicked");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""} ${jimNightshade.variable} ${cormorantUpright.variable}`}
      >
        <div className="nav-container">
          {/* Left: Name with Jim Nightshade */}
          <div className="logo">
            <Link href="/" className="name-title">
              Gyanranjan Jha
            </Link>
          </div>

          {/* Center: Navigation Items */}
          <div className="nav-center">
            <NavbarClient />
          </div>

          {/* Right: Contact Button */}
          <div className="nav-contact">
            <button
              className="contact-btn"
              onClick={handleContactClick}
              aria-label="Contact me"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button
              ref={hamburgerRef}
              className={`hamburger-btn ${isMobileMenuOpen ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <button
            className="close-menu-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <nav
            className="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}

            <button
              className="mobile-contact-btn"
              onClick={handleContactClick}
              style={{ animationDelay: `${navItems.length * 0.1}s` }}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
