"use client";

import React from "react";
import Logo from "../../../public/icons/logo.svg";
import MenuIcon from "../../../public/icons/menu-icon.svg";
import CloseMenuIcon from "../../../public/icons/close-menu-icon.svg";

import Link from "next/link";

function Header() {
  const [open, setOpen] = React.useState(false);

  const handleMenuClick = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <header className="py-5 px-4 md:px-12 lg:px-104 flex flex-col md:flex-row justify-between  md:items-center bg-gray-50 shadow z-50 fixed top-0 right-0 left-0 ">
      <div className="flex flex-row items-center justify-between ">
        <Link href="#home">
          <Logo />
        </Link>
        <button className="w-6 h-6 md:invisible" onClick={handleMenuClick}>
          {open ? <CloseMenuIcon /> : <MenuIcon />}
        </button>
      </div>
      <nav
        className={`flex 
            flex-col 
            md:flex-row items-center 
            space-y-16 md:space-y-0 
            md:space-x-10 my-104 md:my-0 
            text-caption font-semibold uppercase
          text-gray-900 tracking-tight
            ${open ? "block" : "hidden md:block"}`}
      >
        <Link href="#about-us">About Us</Link>
        <Link href="#menu">Menu</Link>
        <Link href="#contact-us">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
