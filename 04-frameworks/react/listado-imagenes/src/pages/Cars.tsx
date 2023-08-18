import React from "react";
import { ICar } from "../interfaces";
import ItemCard from "../components/card/card";
import MainLayout from "../layouts/MainLayout";
import { CartContext } from "../context/CartContext";

const Cars = () => {
  const { cartState } = React.useContext(CartContext);
  const [filteredList, setFilteredList] = React.useState([]);

  React.useEffect(() => {
    console.log(cartState);
    setFilteredList(
      cartState.carsList.filter((listItem: ICar) => listItem.category === "car")
    );
  }, [cartState]);

  return (
    <MainLayout>
      <div className="items-container">
        {Array.isArray(filteredList) &&
          filteredList.map((item: ICar) => (
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
