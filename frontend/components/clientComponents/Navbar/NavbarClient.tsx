// components/clientComponents/Navbar/NavbarClient.tsx
"use client";

import Link from "next/link";

const NavbarClient = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "blogs", href: "/blogs" },
  ];

  return (
    <div className="nav-center-content">
      {navItems.map((item, index) => (
        <div key={item.name} className="nav-item-wrapper">
          <Link href={item.href} className="nav-link">
            {item.name}
          </Link>
          {index < navItems.length - 1 && (
            <span className="nav-separator">•</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarClient;
