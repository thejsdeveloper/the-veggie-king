import { StaticImageData } from "next/image";

export type Card = {
  id: string;
  img: StaticImageData;
  title: string;
  description: string;
  altText: string;
};
