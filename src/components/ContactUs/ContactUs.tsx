import * as React from "react";

import TimeIcon from "public/icons/time-icon.svg";
import MapIcon from "public/icons/map-icon.svg";
import PhoneIcon from "public/icons/phone-icon.svg";

function ContactUs() {
  return (
    <section
      id="contact-us"
      className="flex flex-col pt-32 px-4 md:px-12 xl:px-104"
    >
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-orange-600 text-sm font-normal tracking-wide">
          Contact
        </h2>
        <h2 className="text-gray-900 text-md md:text-lg font-semibold tracking-tighter">
          We’re waiting for you!
        </h2>
      </div>
      <div
        className="my-14 
        flex flex-col md:flex-row flex-wrap gap-8
        justify-center items-center
        space-y-8 md:space-y-0
        space-x-0 md:space-x-8 
      "
      >
        <div
          className="flex 
            flex-col items-center 
            justify-center
            space-y-4
            py-5
            px-3
            w-full
            max-w-404
            rounded-full shadow bg-white"
        >
          <TimeIcon className="w-12 h-12" />
          <h1 className="text-gray-900 text-xm md:text-sm xl:text-md text-center font-semibold tracking-wide">
            Today 12 pm - 9 pm
          </h1>
          <p className="text-gray-900 text-xs font-normal">Working hours</p>
        </div>

        <div
          className="flex 
            flex-col items-center 
            justify-center
            space-y-4
            py-5
            px-3
            w-full
            max-w-404
            rounded-full shadow bg-white"
        >
          <MapIcon className="w-12 h-12" />
          <h1 className="text-gray-900 text-xs md:text-sm xl:text-md text-center font-semibold tracking-wide">
            3883 Rupert St, Vancouver
          </h1>
          <p className="text-gray-900 text-xs font-normal">Find Us</p>
        </div>

        <div
          className="flex 
            flex-col items-center 
            justify-center 
            space-y-4
            py-5
            w-full
            max-w-404
            rounded-full shadow bg-white"
        >
          <PhoneIcon className="w-12 h-12" />
          <h1 className="text-gray-900 text-xs md:text-sm lg:text-md text-center font-semibold tracking-wide">
            (604) 569-2198
          </h1>
          <p className="text-gray-900 text-xs font-normal">Call to us</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
