export interface ICardProduct {
  id: string;
  category: string;
  productName: string;
  image: string;
  price: {
    value: number;
    isSale: [boolean, number?];
  };
}
