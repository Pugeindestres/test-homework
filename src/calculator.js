function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function validateNumbers(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Аргумент должен быть числом');
  }
}

function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}

function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

function divide(a, b) {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error('Деление на ноль');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
