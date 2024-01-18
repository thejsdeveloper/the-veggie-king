import type { Card } from "@/types/Card";
import burger from "public/images/menu-section-mighty-burger.png";
import salad from "public/images/menu-section-chickpae-salad.png";
import wrap from "public/images/menu-section-chickpae-wrap.png";

export const MenuCards: Card[] = [
  {
    id: crypto.randomUUID(),
    img: burger,
    altText: "menu section mighty burger",
    title: "Mighty burger",
    description: "Served with fries and drink",
  },
  {
    id: crypto.randomUUID(),
    img: salad,
    altText: "menu section chickpae salad",
    title: "Chickpae's salad",
    description: "Served with fries and drink",
  },
  {
    id: crypto.randomUUID(),
    img: wrap,
    altText: "menu section chickpae wrap",
    title: "Chickpae's wrap",
    description: "Served with fries and drink",
  },
];
