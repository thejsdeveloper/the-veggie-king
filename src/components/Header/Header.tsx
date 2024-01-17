import React from "react";
import Image from "next/image";

import logo from "../../../public/icons/logo.svg";
import Link from "next/link";

function Header() {
  return (
    <header className="z-50 fixed top-0 right-0 left-0 h-20 shadow px-104 flex flex-row justify-between items-center bg-gray-50">
      <Image src={logo} alt="Veggie King Logo" />
      <nav>
        <ul className="flex flex-row space-x-10 text-caption font-semibold uppercase text-gray-900 tracking-tight">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Menu</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
