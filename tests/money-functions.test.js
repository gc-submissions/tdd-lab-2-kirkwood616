const { formatCurrency, getCoins } = require("../src/js/money-functions.js");

describe("formatCurrency", () => {
  test("given amount 0 get back $0.00", function () {
    expect(formatCurrency(0)).toEqual("$0.00");
  });

  test("given amount 1 get back $1.00", function () {
    expect(formatCurrency(1)).toEqual("$1.00");
  });

  test("given amount 1.5 get back $1.50", function () {
    expect(formatCurrency(1.5)).toEqual("$1.50");
  });

  test("given amount 0.01 get back $0.01", function () {
    expect(formatCurrency(0.01)).toEqual("$0.01");
  });

  test("given amount 527.6789 get back $527.68", function () {
    expect(formatCurrency(527.6789)).toEqual("$527.68");
  });

  test("given amount -1 get back -$1.00", function () {
    expect(formatCurrency(-1)).toEqual("-$1.00");
  });

  test("given amount -20.21 get back -$20.21", function () {
    expect(formatCurrency(-20.21)).toEqual("-$20.21");
  });

  test("given amount -50.5 get back -$50.50", function () {
    expect(formatCurrency(-50.5)).toEqual("-$50.50");
  });
});

describe("getCoins", () => {
  test("32¢", function () {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });

  test("10¢", function () {
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });

  test("27¢", function () {
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
  });

  test("68¢", function () {
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });

  test("189¢", function () {
    expect(getCoins(189)).toEqual({
      quarters: 7,
      dimes: 1,
      nickels: 0,
      pennies: 4,
    });
  });
});
