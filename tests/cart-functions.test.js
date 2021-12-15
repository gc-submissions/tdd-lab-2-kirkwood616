const { method1, method2 } = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("Change", function () {
    expect(method1(5, 6)).toEqual(1);
  });

  test("Change", function () {
    expect(method1(12.3, 13.03)).toEqual(0.73);
  });
});

describe("isSufficientPayment", () => {
  test("Is payment enough to cover total", function () {
    expect(method2(5, 6)).toBe(true);
  });

  test("Is payment enough to cover total", function () {
    expect(method2(10, 7)).toBe(false);
  });

  test("Is payment enough to cover total", function () {
    expect(method2(3, 3)).toBe(true);
  });

  test("Is payment enough to cover total", function () {
    expect(method2(10.75, 9.85)).toBe(false);
  });
});

describe("calculateTotal", () => {
  test.todo("add calculateTotal tests here");
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});
