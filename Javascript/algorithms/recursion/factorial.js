

function factorialUsingIterative(number) {
  let result = 1
  if (number === 0) {
    return 0;
  }
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

function factorialUsingRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * factorialUsingRecursive(number - 1);
}

factorialUsingIterative(5);
console.log(factorialUsingRecursive(5));

//O(n)
