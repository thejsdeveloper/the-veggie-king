import * as React from "react";
import Card from "@/components/Card";
import { MenuCards } from "@/constants";

function Menu() {
  return (
    <section className="flex flex-col mb-32" id="menu">
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <h3 className="text-orange-600 text-sm font-normal tracking-wide">
          Menu
        </h3>
        <h2 className="text-gray-900 text-lg font-semibold tracking-tighter">
          Explore our best food
        </h2>
        <p className="text-gray-900 text-xs font-normal">
          Below you can see our best selling meals!
        </p>
      </div>
      <div className="flex flex-row justify-center mt-8 px-104 flex flex-row space-x-8">
        {MenuCards.map((menu) => (
          <Card key={menu.id} {...menu} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
