const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

///////////// CALCULATE CHANGE: METHOD 1
describe("calculateChange", () => {
  test("Change", function () {
    expect(calculateChange(5, 6)).toEqual(1);
  });

  test("Change", function () {
    expect(calculateChange(12.3, 13.03)).toEqual(0.73);
  });

  test("Change", function () {
    expect(calculateChange(20, 37)).toEqual(17);
  });
});

///////////// SUFFICIENT PAYMENT: METHOD 2
describe("isSufficientPayment", () => {
  test("Is payment enough to cover total", function () {
    expect(isSufficientPayment(5, 6)).toBe(true);
  });

  test("Is payment enough to cover total", function () {
    expect(isSufficientPayment(10, 7)).toBe(false);
  });

  test("Is payment enough to cover total", function () {
    expect(isSufficientPayment(3, 3)).toBe(true);
  });

  test("Is payment enough to cover total", function () {
    expect(isSufficientPayment(10.75, 9.85)).toBe(false);
  });
});

///////////// CALCULATE TOTAL: METHOD 3
describe("calculateTotal", () => {
  test("Total price of array of objects", function () {
    expect(calculateTotal([{ name: "Item1", price: 4.99 }])).toBeCloseTo(4.99);
  });

  test("Total price of array of objects", function () {
    expect(
      calculateTotal([
        { name: "Item1", price: 3.5 },
        { name: "Item2", price: 12.99 },
        { name: "Item3", price: 0.03 },
      ])
    ).toBeCloseTo(16.52);
  });

  test("Total price of array of objects", function () {
    expect(calculateTotal([])).toEqual(0);
  });

  test("Total price of array of objects", function () {
    expect(
      calculateTotal([
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
    addItem(results, "Beans", 3);
    expect(results).toEqual([{ name: "Beans", price: 3 }]);
  });

  test("Adding 1 item to an array with 1 item", function () {
    let results = [{ name: "Beans", price: 3 }];
    addItem(results, "Sugar", 2);
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
    addItem(results, "Green Onion", 1);
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
    removeItem(results, 0);
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
    removeItem(results, 2);
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
    removeItem(results, 1);
    expect(results).toEqual([
      { name: "Beans", price: 3 },
      { name: "Beef", price: 10 },
    ]);
  });

  test("Remove last item from the array", function () {
    let results = [{ name: "Beans", price: 3 }];
    removeItem(results, 0);
    expect(results).toEqual([]);
  });
});
