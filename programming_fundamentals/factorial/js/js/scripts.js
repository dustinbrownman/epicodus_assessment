var factorials = [1];

function factorial(number) {
  if (factorials.length > number) {
    return factorials[number];
  } else {
    newFactorial = number * factorial(number - 1)
    factorials.push(newFactorial);
    return newFactorial;
  }
};
