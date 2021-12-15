function formatCurrency(amount) {
  let dollars = amount.toFixed(2);
  let negDollars = Math.abs(amount).toFixed(2);

  if (amount >= 0) {
    return `$${dollars}`;
  } else {
    return `-$${negDollars}`;
  }
}

function getCoins(cents) {
  let coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  coins.quarters = Math.floor(cents / 25);
  cents -= 25 * coins.quarters;
  coins.dimes = Math.floor(cents / 10);
  cents -= 10 * coins.dimes;
  coins.nickels = Math.floor(cents / 5);
  cents -= 5 * coins.nickels;
  coins.pennies = cents;

  return coins;
}

module.exports = {
  formatCurrency: formatCurrency,
  getCoins: getCoins,
};
