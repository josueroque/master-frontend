export interface ICar {
  id: number;
  category: string;
  make: string;
  model: string;
  year: string;
  price: number;
  image: {
    url: string;
    title: string;
  };
}
