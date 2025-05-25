export type Product = {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  category: string;
  image: string;
};

export type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

export type Category = {
  id: string;
  name: string;
};
