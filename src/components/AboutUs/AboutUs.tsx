import Image from "next/image";
import * as React from "react";

import aboutUsFoodImage from "public/images/about-us-section-food.png";

function AboutUs() {
  return (
    <section className="flex flex-row h-646">
      <div className="flex-1 relative">
        <div className="flex flex-column items-center absolute -left-1/3 bg-green-600 h-646 w-646 rounded-full">
          <Image
            src={aboutUsFoodImage}
            alt="about us meal"
            className="absolute left-1/2"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center space-y-4 h-full pr-104">
        <h3 className="text-orange-600 text-sm font-normal tracking-wide">
          About Us
        </h3>
        <h2 className="text-gray-900 text-lg font-semibold tracking-tighter">
          Few words about us
        </h2>
        <p className="text-gray-900 text-sm font-normal">
          We are not ordinary food truck. We create a place overflowing with
          positive energy that it expresses important to us values. Get to know
          them specifically.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;

/**
 

 */
