import { cars as carsList } from "../data";
import { ICar } from "../interfaces";
import ItemCard from "../components/card/card";
import MainLayout from "../layouts/MainLayout";
const Cars = () => {
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
