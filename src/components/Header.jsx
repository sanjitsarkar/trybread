import { Link } from "react-router-dom";

import React, { useState } from "react";
import navIcon from "../images/nav.svg";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="h-16 flex bg-primary items-center justify-between px-7 text-white shadow-md fixed left-0 top-0 w-full z-50">
      <nav className="left">
        <a href="/" className="">
          bre.ad/jane
        </a>
      </nav>
      <nav>
        <img
          className="cursor-pointer md:hidden"
          src={navIcon}
          onClick={() => setShowNav(!showNav)}
        />
      </nav>
      <nav
        className={`absolute top-16 left-0 md:relative md:top-0 md:left-0 right md:flex gap-6 items-center z-50 md:bg-transparent md:bg-opacity-0 md:py-0 ${
          !showNav
            ? "hidden"
            : "grid place-items-center w-full bg-secondary bg-opacity-90 py-7"
        }`}
      >
        <a href="/" className="">
          Offerings
        </a>
        <a href="/" className="">
          Other Links
        </a>
        <a href="/" className="">
          Testimonials
        </a>
        <a href="/" className="">
          Portfolio
        </a>
        <a href="/" className="">
          Contact me
        </a>
        <a
          href="/booktrial"
          className="px-2 py-1 border border-white  rounded-md"
        >
          Book Trial
        </a>
      </nav>
    </header>
  );
};

export default Header;
