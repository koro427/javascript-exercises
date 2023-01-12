const convertToCelsius = function(value) {
  let result = ((value - 32) * (5/9)).toFixed(1);
  if (result === 0.0) result = 0;
  return parseFloat(result);
};

const convertToFahrenheit = function(value) {
  let result = (value * (9/5) + 32).toFixed(1);
  if (result === 0.0) result = 0;
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
