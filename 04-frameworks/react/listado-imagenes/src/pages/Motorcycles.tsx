import { cars as carsList } from "../data";
import { ICar } from "../interfaces";
import ItemCard from "../components/card/card";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import { CartContext } from "../context/CartContext";
const Cars = () => {
  const [filteredList, setFilteredList] = React.useState([]);
  const { cartState } = React.useContext(CartContext);
  React.useEffect(() => {
    setFilteredList(
      cartState.carsList.filter(
        (listItem: ICar) => listItem.category === "motorcycle"
      )
    );
  }, [cartState]);
  return (
    <MainLayout>
      <div className="items-container">
        {filteredList.map((item: ICar) => (
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
