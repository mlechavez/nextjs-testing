export type Product = {
  id: number;
  name: string;
  price: number;
};

export function getProduct(id: number): Product {
  return { id, name: "T-Shirt", price: 10 };
}
