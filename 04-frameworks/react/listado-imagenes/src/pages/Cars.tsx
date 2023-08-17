import React from "react";
import { ICar } from "../interfaces";
import ItemCard from "../components/card/card";
import MainLayout from "../layouts/MainLayout";
import { CartContext } from "../context/CartContext";

const Cars = () => {
  const { cartState, carsList } = React.useContext(CartContext);

  React.useEffect(() => {
    console.log({ cartState });
  }, [cartState]);
  return (
    <MainLayout>
      <div className="items-container">
        {carsList.map((item: ICar) => (
          <ItemCard
            key={item.id}
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
