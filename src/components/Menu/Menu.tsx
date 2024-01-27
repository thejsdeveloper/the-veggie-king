import * as React from "react";
import Card from "@/components/Card";
import { MenuCards } from "@/constants";

function Menu() {
  return (
    <section
      className="flex flex-col 
                  pt-32 
                  px-4 md:px-12 lg:px-104 "
      id="menu"
    >
      <div
        className="flex-1 flex flex-col 
                  items-center 
                  justify-center space-y-4
      "
      >
        <h3 className="text-orange-600 text-sm font-normal tracking-wide">
          Menu
        </h3>
        <h2 className="text-gray-900 text-md md:text-lg font-semibold tracking-tighter">
          Explore our best food
        </h2>
        <p className="text-gray-900 text-xs md:text-sm font-normal text-center">
          Below you can see our best selling meals!
        </p>
      </div>
      <div
        className="flex 
                  flex-col md:flex-row 
                  items-center md:justify-center 
                  mt-8
                  space-y-8 md:space-y-0
                  space-x-0 md:space-x-3 lg:space-x-8"
      >
        {MenuCards.map((menu) => (
          <Card key={menu.id} {...menu} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
