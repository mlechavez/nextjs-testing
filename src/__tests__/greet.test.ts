import { greet } from "@/lib/greet";

describe("Greet", () => {
  it("should return the greetings with name", () => {
    // Act
    const result = greet("Lester");

    expect(result).toMatch(/lester/i);
  });
});
