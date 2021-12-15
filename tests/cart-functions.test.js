const {
  method1,
  method2,
  method3,
  method4,
  method5,
} = require("../src/js/cart-functions");

///////////// CALCULATE CHANGE: METHOD 1
describe("calculateChange", () => {
  test("Change", function () {
    expect(method1(5, 6)).toEqual(1);
  });

  test("Change", function () {
    expect(method1(12.3, 13.03)).toEqual(0.73);
  });

  test("Change", function () {
    expect(method1(20, 37)).toEqual(17);
  });
});

///////////// SUFFICIENT PAYMENT: METHOD 2
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

///////////// CALCULATE TOTAL: METHOD 3
describe("calculateTotal", () => {
  test("Total price of array of objects", function () {
    expect(method3([{ name: "Item1", price: 4.99 }])).toBeCloseTo(4.99);
  });

  test("Total price of array of objects", function () {
    expect(
      method3([
        { name: "Item1", price: 3.5 },
        { name: "Item2", price: 12.99 },
        { name: "Item3", price: 0.03 },
      ])
    ).toBeCloseTo(16.52);
  });

  test("Total price of array of objects", function () {
    expect(method3([])).toEqual(0);
  });

  test("Total price of array of objects", function () {
    expect(
      method3([
        { name: "Item1", price: 3.5 },
        { name: "Item2", price: 12.99 },
      ])
    ).toBeCloseTo(16.49);
  });
});

///////////// ADD ITEM: METHOD 4
describe("addItem", () => {
  test("Adding 1 item to an empty array", function () {
    let results = [];
    method4(results, "Beans", 3);
    expect(results).toEqual([{ name: "Beans", price: 3 }]);
  });

  test("Adding 1 item to an array with 1 item", function () {
    let results = [{ name: "Beans", price: 3 }];
    method4(results, "Sugar", 2);
    expect(results).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });

  test("Adding to an array with 3 items", function () {
    let results = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Beef", price: 10 },
    ];
    method4(results, "Green Onion", 1);
    expect(results).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Beef", price: 10 },
      { name: "Green Onion", price: 1 },
    ]);
  });
});

///////////// ADD ITEM: METHOD 5
describe("removeItem", () => {
  test("Remove first item from the array", function () {
    let results = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Beef", price: 10 },
    ];
    method5(results, 0);
    expect(results).toEqual([
      { name: "Sugar", price: 2 },
      { name: "Beef", price: 10 },
    ]);
  });

  test("Remove last item from the array", function () {
    let results = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Beef", price: 10 },
    ];
    method5(results, 2);
    expect(results).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });

  test("Remove last item from the array", function () {
    let results = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Beef", price: 10 },
    ];
    method5(results, 1);
    expect(results).toEqual([
      { name: "Beans", price: 3 },
      { name: "Beef", price: 10 },
    ]);
  });

  test("Remove last item from the array", function () {
    let results = [{ name: "Beans", price: 3 }];
    method5(results, 0);
    expect(results).toEqual([]);
  });
});
