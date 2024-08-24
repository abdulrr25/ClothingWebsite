"use client"

import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa"; // Importing an icon for the menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-items-start gap-10 items-center py-4">
        

        <button
          className="lg:hidden text-lg focus:outline-none text-left"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex w-fit gap-20 mx-auto font-medium text-black lg:py-0 py-4`}
        >
          <li>
            <Link className="navbar__link relative" href="#">
              HOME
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              MENS
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              WOMEN
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              JEWELRY
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              PERFUME
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              BLOG
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              HOT OFFER
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
