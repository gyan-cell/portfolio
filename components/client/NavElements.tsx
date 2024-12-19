"use client";
import { itim } from "@/styles/fonts";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
const NavElements = () => {
  const { data: session } = useSession();

  const [showNav, setShowNav] = React.useState(true);

  const pathName = usePathname();

  return (
    <>
      <div
        className={
          showNav
            ? "NavElements"
            : "NavElements activeNav bg-transparent  bg-none  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 "
        }
      >
        <Link
          onClick={() => setShowNav(true)}
          className={itim.className}
          href={
            pathName === "/blogs" ||
            pathName === "/profile" ||
            pathName === "/login" ||
            pathName === "/register"
              ? "/#projects"
              : "#projects"
          }
        >
          Projects
        </Link>
        <Link
          onClick={() => setShowNav(true)}
          className={itim.className}
          href={
            pathName === "/blogs" ||
            pathName === "/profile" ||
            pathName === "/login" ||
            pathName === "/register"
              ? "/#about"
              : "#about"
          }
        >
          About
        </Link>
        <Link
          onClick={() => setShowNav(true)}
          className={itim.className}
          href={
            pathName === "/blogs" ||
            pathName === "/profile" ||
            pathName === "/login" ||
            pathName === "/register"
              ? "/#contact"
              : "#contact"
          }
        >
          Contact
        </Link>
        <Link
          onClick={() => setShowNav(true)}
          className={itim.className}
          href={"mailto:hellogyanranjan@gmail.com"}
          type="email"
        >
          Email
        </Link>
        <Link
          onClick={() => setShowNav(true)}
          className={itim.className}
          href="/blogs"
        >
          Articles
        </Link>
        {session ? (
          <Link
            onClick={() => setShowNav(true)}
            className={itim.className}
            href="/profile"
          >
            <Button variant="default">
              {session.user.name?.toUpperCase()}
            </Button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="navMenuicon">
        {showNav ? (
          <AiOutlineMenu onClick={() => setShowNav(false)} />
        ) : (
          <FaX onClick={() => setShowNav(true)} />
        )}
      </div>
    </>
  );
};

export default NavElements;
