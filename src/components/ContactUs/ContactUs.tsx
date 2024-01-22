import Image from "next/image";
import * as React from "react";

import timeIcon from "public/icons/time-icon.svg";
import mapIcon from "public/icons/map-icon.svg";
import phoneIcon from "public/icons/phone-icon.svg";

function ContactUs() {
  return (
    <section id="contact-us" className="flex flex-col pt-32 px-104">
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <h3 className="text-orange-600 text-sm font-normal tracking-wide">
          Contact
        </h3>
        <h2 className="text-gray-900 text-lg font-semibold tracking-tighter">
          We’re waiting for you!
        </h2>
      </div>
      <div className="mt-14 flex flex-row items-center justify-center space-x-8">
        <div className="flex flex-col items-center justify-center flex-1 space-y-4 rounded-full shadow bg-white px-16 py-5">
          <Image src={timeIcon} alt="location icon" className="w-12 h-12" />
          <h1 className="text-gray-900 text-md font-semibold tracking-wide">
            Today 12 pm - 9 pm
          </h1>
          <p className="text-gray-900 text-xs font-normal">Working hours</p>
        </div>

        <div className="flex flex-col items-center  justify-center flex-1 space-y-4 rounded-full shadow bg-white px-16 py-5">
          <Image src={mapIcon} alt="location icon" className="w-12 h-12" />
          <h1 className="text-gray-900 text-md font-semibold tracking-wide">
            3883 Rupert St, Vancouver
          </h1>
          <p className="text-gray-900 text-xs font-normal">Find Us</p>
        </div>

        <div className="flex flex-col items-center  justify-center space-y-4 flex-1 rounded-full shadow bg-white px-16 py-5">
          <Image src={phoneIcon} alt="location icon" className="w-12 h-12" />
          <h1 className="text-gray-900 text-md font-semibold tracking-wide">
            (604) 569-2198
          </h1>
          <p className="text-gray-900 text-xs font-normal">Call to us</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
