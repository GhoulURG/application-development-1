console.info("Order processing program started.");

function calculateTotal(price, quantity) {
  console.info(`Calculating total for price=${price}, quantity=${quantity}`);
  return price * quantity;
}

function applyDiscount(total) {
  const discount = 10;

  if (total > 100) {
    console.info("Discount applied: order total exceeds $100.");
    return total - discount;
    // ERROR: ReferenceError on line 7
// Root cause: the variable "discount" is not defined anywhere in the program
  }

  console.info("No discount applied.");
  return total;
}

function processOrder(price, quantity) {
  if (price <= 0 || quantity <= 0) {
    console.error("Invalid input: price and quantity must be positive values.");
    throw new Error("Invalid price or quantity");
  }

  const total = calculateTotal(price, quantity);
  console.info(`Calculated total: ${total}`);

  const discounted = applyDiscount(total);
  console.info(`Final order total: ${discounted}`);

  return discounted.toFixed(2);
}

module.exports = {
  calculateTotal,
  applyDiscount,
  processOrder
};

console.log("Order result:", processOrder(25, 5));
