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
  if (payment >= total) {
    return true;
  }
  return false;
}

function calculateTotal(itemsArray) {
  return;
}

module.exports = {
  method1: calculateChange,
  method2: isSufficientPayment,
  method3: calculateTotal,
};
