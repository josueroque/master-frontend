import React from "react";
import { cars as carsList } from "../data";
import { car } from "../interfaces";
import ItemCard from "../components/card/card";
import MainMenu from "../main-menu/main-menu";
import MainLayout from "../layouts/main";
const Cars = () => {
  return (
    <MainLayout>
      <div className="items-container">
        {carsList.map((item: car) => (
          <ItemCard
            imageUrl={item.image.url}
            title={item.image.title}
            {...item}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Cars;
