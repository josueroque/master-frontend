import React from "react";
import { cars as carsList } from "../data";
import { car } from "../interfaces";
import ItemCard from "../components/card/card";
const Motorcycles = () => {
  return (
    <div className="items-container">
      {carsList.map((item: car) => (
        <ItemCard
          imageUrl={item.image.url}
          title={item.image.title}
          {...item}
        />
      ))}
    </div>
  );
};

export default Motorcycles;
