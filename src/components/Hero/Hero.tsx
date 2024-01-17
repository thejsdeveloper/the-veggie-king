"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";

import heroCornerFood from "public/images/hero-section-food.png";
import heroFood1 from "public/images/hero-section-slide-food-1.png";
import heroFood2 from "public/images/hero-section-slide-food-2.png";
import heroFood3 from "public/images/hero-section-slide-food-2.png";
import heroFood4 from "public/images/hero-section-slide-food-3.png";
import checkMenuIcon from "public/icons/check-menu-icon.svg";

const images = [heroFood1, heroFood2, heroFood3, heroFood4];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useInterval(() => {
    setCurrentIndex(currentIndex + 1);
  }, 3000);

  const currentImage = images[currentIndex % images.length];

  return (
    <section className="flex min-h-screen flex-row flex-1  bg-gray-50">
      <aside className="pl-104 flex-1 flex flex-col justify-center relative">
        <h1 className="uppercase text-xl color-gray-900 font-black tracking-wide">
          Healthy & fresh Food for you
        </h1>
        <p className="color-gray-900 text-xs font-normal mt-4">
          Created for lovers of healthy, delicious and non-obvious food.
        </p>
        <div className="mt-4 ">
          <button
            type="button"
            className="bg-orange-600 hover:bg-orange-500 px-4 py-4 rounded-lg"
          >
            <span className="color-gray-900 text-base font-medium tracking-wide">
              Check Menu
            </span>
            <span className="ml-2">
              <Image
                src={checkMenuIcon}
                alt="right arrow icon"
                className="inline"
              />
            </span>
          </button>
        </div>
        <Image
          src={heroCornerFood}
          alt="chilli image"
          className="absolute bottom-0 left-0 "
        />
      </aside>
      <aside className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col justify-center bg-green-600 relative w-404 self-end relative">
          <Image
            src={currentImage}
            alt="Food Image 1"
            className="absolute right-2/3 scale-150"
          />
        </div>
      </aside>
    </section>
  );
}

export default Hero;
