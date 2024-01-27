import * as React from "react";
import Logo from "public/icons/logo.svg";
import TwitterIcon from "public/icons/twitter-icon.svg";
import FbIcon from "public/icons/facebook-icon.svg";
import InstagramIcon from "public/icons/instagram-icon.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col mt-32 bg-gray-300 divide-y divide-gray-900/[.32]">
      <div
        className="flex flex-col md:grid md:grid-cols-footer gap-8 
                    py-6 px-4 md:px-12 lg:px-104
                    "
      >
        <Logo />
        <nav className="flex flex-col lg:flex-row justify-start lg:justify-evenly space-y-6 lg:space-y-0 flex-1 mt-2">
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
            <TwitterIcon className="cursor-pointer fill-black hover:fill-green-600" />
            <FbIcon className="cursor-pointer fill-black  hover:fill-green-600" />
            <InstagramIcon className="cursor-pointer fill-black  hover:fill-green-600" />
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
