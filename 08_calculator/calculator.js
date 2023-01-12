const add = function(num1, num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(array) {
	let result = 0;
  for (item of array) {
    result += item;
  }
  return result;
};

const multiply = function(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(num1, num2) {
  let result = num1 ** num2;
  return result;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;

  let result = num;
  for (let i = num; i > 1; i--) {
    result *= i-1;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
