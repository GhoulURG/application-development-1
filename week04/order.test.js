const { processOrder } = require("./order");

// Discount applied
test("applies discount when total is greater than 100", () => {
  const price = 25;
  const quantity = 5;
  const expected = (115).toFixed(2);

  const result = processOrder(price, quantity);

  expect(result).toBe(expected);
});

// No discount
test("does not apply discount when total is less than 100", () => {
  const price = 20;
  const quantity = 4;
  const expected = (80).toFixed(2);

  const result = processOrder(price, quantity);

  expect(result).toBe(expected);
});

// Edge case: exactly 100
test("does not apply discount when total is exactly 100", () => {
  const price = 20;
  const quantity = 5;
  const expected = (100).toFixed(2);

  const result = processOrder(price, quantity);

  expect(result).toBe(expected);
});

// Invalid input
test("throws error for negative quantity", () => {
  const price = 10;
  const quantity = -2;

  expect(() => {
    processOrder(price, quantity);
  }).toThrow();
});
