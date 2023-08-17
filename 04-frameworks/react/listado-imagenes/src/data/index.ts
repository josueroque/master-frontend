import { ICar } from "../interfaces";

export const cars: ICar[] = [
  {
    id: 1,
    category: "car",
    make: "Volksvawen",
    model: "Beatle",
    price: 5000,
    year: "1965",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/03/27/19/44/car-1283947_960_720.jpg",
      title: "Beutiful Blue Beatle",
    },
  },
  {
    id: 2,
    category: "car",
    make: "Toyota",
    model: "Corolla",
    price: 8500,
    year: "2010",
    image: {
      url: "https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_960_720.jpg",
      title: "Toyota Corolla Red",
    },
  },
];
