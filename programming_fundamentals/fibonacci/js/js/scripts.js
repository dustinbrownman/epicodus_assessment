var fibonacciNumbers = [0, 1];

function fibonacci(number) {
  if (fibonacciNumbers.length > number) {
    return fibonacciNumbers[number];
  } else {
    return fibonacciNumbers[number] = fibonacci(number - 1) + fibonacci(number - 2);
  }
};
