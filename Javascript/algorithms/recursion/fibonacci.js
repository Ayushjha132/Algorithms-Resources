

// 0, 1, 1, 2, 3, 5, 8, 13, ... so on 
// give the output based on specific value. 

function fibonacciIterative(n) {

  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// O(2^n)  : exponital time -> tress grows with the increase in the value 
function fibonacciRecursive(n) {
  // base case 
  if (n === 0 || n === 1) {
    return n;
  }
  //recursive case 
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(8));
console.log(fibonacciRecursive(8));



