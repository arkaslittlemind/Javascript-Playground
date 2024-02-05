// add.test.js - Your Jest test file
const add = require('./sum');

// Test case for positive numbers
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// Test case for negative numbers
test('adds -1 + -2 to equal -3', () => {
  expect(add(-1, -2)).toBe(-3);
});

// Test case for mixed positive and negative numbers
test('adds 5 + -3 to equal 2', () => {
  expect(add(5, -3)).toBe(2);
});

// Test case for zero
test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});

// Additional test cases as needed...
