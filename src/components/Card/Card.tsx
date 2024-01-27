import { Card } from "@/types/Card";
import Image from "next/image";
import * as React from "react";

function Card({ img, altText, title, description }: Card) {
  return (
    <div className="group cursor-pointer shadow  rounded-br-2xl rounded-bl-2xl bg-white">
      <div className="overflow-hidden">
        <Image
          src={img}
          alt={altText}
          className="group-hover:scale-125 ease-linear duration-500"
        />
      </div>
      <div className="py-6 px-5 space-y-2 lg:space-y-4">
        <h1 className="text-gray-900 text-sm xl:text-md font-semibold tracking-wide">
          {title}
        </h1>
        <p className="text-gray-900 text-xs font-normal">{description}</p>
      </div>
    </div>
  );
}

export default Card;
