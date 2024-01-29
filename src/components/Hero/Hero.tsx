"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";

import heroCornerFood from "public/images/hero-section-food.png";
import heroFood1 from "public/images/hero-section-slide-food-1.png";
import heroFood2 from "public/images/hero-section-slide-food-2.png";
import heroFood3 from "public/images/hero-section-slide-food-2.png";
import heroFood4 from "public/images/hero-section-slide-food-3.png";
import CheckMenuIcon from "public/icons/check-menu-icon.svg";
import Link from "next/link";

const images = [heroFood1, heroFood2, heroFood3, heroFood4];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useInterval(() => {
    setCurrentIndex(currentIndex + 1);
  }, 3000);

  const currentImage = images[currentIndex % images.length];

  return (
    <section
      id="home"
      className="min-h-screen 
      flex flex-row
      bg-gray-50
      overflow-hidden relative"
    >
      <aside
        className="relative
        pl-4 md:pl-12 lg:pl-104
        flex flex-row flex-1 items-center"
      >
        <div className="flex flex-col flex-1 z-10">
          <h1 className="text-lg md:text-xl color-gray-900 font-black tracking-tighter md:tracking-wide">
            Healthy & Fresh
          </h1>
          <h1 className="text-lg md:text-xl color-gray-900 font-black tracking-wide">
            Food for you
          </h1>
          <p className="color-gray-900 text-xs font-normal my-4 w-3/4">
            Created for lovers of healthy, delicious and non-obvious food.
          </p>
          <div className="my-4">
            <Link
              href="#menu"
              className="bg-orange-600 hover:bg-orange-500 px-4 py-4 rounded-lg"
            >
              <span className="color-gray-900 text-base font-medium tracking-wide">
                Check Menu
              </span>
              <span className="ml-2">
                <CheckMenuIcon className="inline" />
              </span>
            </Link>
          </div>
        </div>

        <Image
          src={heroCornerFood}
          alt="chilli image"
          className="absolute bottom-0 left-0"
        />

        <Image
          src={currentImage}
          alt="Food Image 1"
          className="absolute 
          left-[90%] md:left-[70%] z-40 
          scale-110 md:scale-75"
        />
      </aside>
      <aside className="bg-green-600 w-[20%] lg:w-1/4" />
    </section>
  );
}

export default Hero;
