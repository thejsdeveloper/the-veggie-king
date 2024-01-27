import Image from "next/image";
import * as React from "react";

import aboutUsFoodImage from "public/images/about-us-section-food.png";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex flex-col-reverse 
      md:grid grid-rows-1 grid-cols-2
      pl-4 md:pr-12 lg:pr-104 
      pt-5 md:pt-32
      overflow-hidden
      "
    >
      <div className="h-358 md:h-477 xl:h-646 relative">
        <div
          className="
          absolute
          -top-1/4 md:top-0
          left-2/3 
          md:-left-[80%]
          lg:-left-[60%]
          xl:-left-[30%]
          flex flex-column items-center 
          bg-green-600 
          h-358 w-358
          md:h-477 md:w-477
          xl:h-646 xl:w-646 
          rounded-full"
        >
          <Image
            src={aboutUsFoodImage}
            alt="about us meal"
            className="
            absolute 
            scale-75 xl:scale-100
            -left-[30%] md:left-[45%]"
          />
        </div>
      </div>
      <div
        className="flex-1 flex flex-col justify-center 
                  space-y-4 
                  h-full w-[75%] md:w-full"
      >
        <h3 className="text-orange-600 text-sm font-normal tracking-wide">
          About Us
        </h3>
        <h2 className="text-gray-900 text-md md:text-lg font-semibold tracking-tighter">
          Few words about us
        </h2>
        <p className="text-gray-900 text-xs md:text-sm font-normal">
          We are not ordinary food truck. We create a place overflowing with
          positive energy that it expresses important to us values. Get to know
          them specifically.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
