function calculateChange(total, payment) {
  let difference = Math.abs(total - payment);
  let result = difference - Math.floor(difference) !== 0;

  if (result) {
    return parseFloat(difference.toFixed(2));
  } else {
    return difference;
  }
}

function isSufficientPayment(total, payment) {
  return payment >= total;
}

function calculateTotal(itemsArray) {
  let total = 0;
  for (let i = 0; i < itemsArray.length; i++) {
    total += itemsArray[i].price;
  }
  return total;
}

function addItem(itemsArray, name, price) {
  itemsArray.push({ name: name, price: price });
}

function removeItem(itemsArray, index) {
  itemsArray.splice(index, 1);
}

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
