function calculateTotal(price, quantity) {
  return price * quantity;
}

function applyDiscount(total) {
  const discount = 10;

  if (total > 100) {
    return total - discount;
    // ERROR: ReferenceError on line 7
// Root cause: the variable "discount" is not defined anywhere in the program
  }
  return total;
}

function processOrder(price, quantity) {
  const total = calculateTotal(price, quantity);
  const discounted = applyDiscount(total);
  return discounted.toFixed(2);
}

module.exports = {
  calculateTotal,
  applyDiscount,
  processOrder
};

console.log(processOrder(25, 5));
