import Image from "next/image";
import * as React from "react";
import photo1 from "public/images/gallery-photo-1.png";
import photo2 from "public/images/gallery-photo-2.png";
import photo3 from "public/images/gallery-photo-3.png";
import photo4 from "public/images/gallery-photo-4.png";
import photo5 from "public/images/gallery-photo-5.png";
import photo6 from "public/images/gallery-photo-6.png";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

function Gallery() {
  return (
    <section className="flex flex-col">
      <h2 className="flex flex-row justify-center mb-7 text-gray-900 text-lg font-semibold tracking-tighter">
        Good food = happy clients
      </h2>
      <div className="grid grid-rows-2 grid-cols-3">
        {photos.map((photo, i) => (
          <div
            className="hover:scale-95 ease-linear duration-500"
            key={`photo-${i + 1}`}
          >
            <Image src={photo} alt={`gallery-photo-${i + 1}`} className="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
