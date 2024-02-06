import { registerUser } from "@/lib/users";

describe("users", () => {
  const cases = [null, undefined];

  it.each(cases)("should throw an error when the value is %s", (a) => {
    expect(() => {
      registerUser(a);
    }).toThrow();
  });
});
