import Image from "next/image";
import * as React from "react";
import logo from "public/icons/logo.svg";
import twitterIcon from "public/icons/twitter-icon.svg";
import fbIcon from "public/icons/facebook-icon.svg";
import instagramIcon from "public/icons/instagram-icon.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col mt-32 bg-gray-300 divide-y divide-gray-900/[.32]">
      <div className="grid grid-cols-footer gap-4 py-6  px-104">
        <Image src={logo} alt="Veggie king logo" />
        <nav className="flex flex-row justify-evenly flex-1 mt-2">
          <Link
            href="#about-us"
            className="text-caption text-gray-900 font-semibold uppercase tracking-tight"
          >
            About Us
          </Link>
          <Link
            href="#menu"
            className="text-caption text-gray-900 font-semibold uppercase tracking-tight"
          >
            Menu
          </Link>
          <Link
            href="#contact-us"
            className="text-caption text-gray-900 font-semibold uppercase tracking-tight"
          >
            Contact
          </Link>
        </nav>
        <div className="flex flex-col flex-1 space-y-6 mt-2">
          <p className="text-xs text-gray-900 font-normal">
            Stay up to date with our new openings, upcoming events, seasonal
            specials and promotions. Check our socials.
          </p>
          <div className="flex flex-row space-x-4 items-center">
            <Image src={twitterIcon} alt="twitter" />
            <Image src={fbIcon} alt="facebook" />
            <Image src={instagramIcon} alt="instagram" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center px-104">
        <p className="my-6 text-xs text-normal">© 2023 The Veggie King</p>
      </div>
    </footer>
  );
}

export default Footer;
