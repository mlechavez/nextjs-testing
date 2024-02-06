import { getProduct } from "@/lib/products";

describe("products", () => {
  it("should return the product information", () => {
    const result = getProduct(1);

    // expect(result).toEqual({ id: 1, name: "T-Shirt", price: 10 });
    expect(result).toMatchObject({ id: 1, name: "T-Shirt", price: 10 });
  });
});
