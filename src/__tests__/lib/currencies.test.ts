import { getCurrencies } from "@/lib/currencies";

describe("Currencies", () => {
  it("should return the supported currencies", () => {
    const result = getCurrencies();

    expect(result).toContain("PHP");
    expect(result).toContain("EUR");
    expect(result).toContain("USD");

    expect(result).toEqual(expect.arrayContaining(["USD", "EUR"]));
  });
});
