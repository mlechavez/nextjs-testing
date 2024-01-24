import { MyMath } from "@/lib/my-math";

describe("MyMath", () => {
  it("should return the sum of the two arguments", () => {
    //Arrange
    const math = new MyMath();

    //Act
    const result = math.add(1, 2);

    //Assert
    expect(result).toBe(3);
  });

  it("should return the first argument when it is greater than", () => {
    const math = new MyMath();

    const result = math.max(2, 1);

    expect(result).toBe(2);
  });

  it("should return the second argement whe it is greater than", () => {
    const math = new MyMath();

    const result = math.max(1, 2);

    expect(result).toBe(2);
  });
});
