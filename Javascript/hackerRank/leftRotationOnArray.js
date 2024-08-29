

function rotateLeft(d, arr) {
  // Write your code here
  //navie approach
  // d -> time shift
  // arr -> array
  // [1, 2 ,3, 4, 5]. => on1 => [2, 3, 4, 5, 1]
  //                  => on2 => [3, 4, 5, 1, 2]
  while (d !== 0) {
    const front = arr.shift();
    arr.push(front);
    d--;
  }
  return arr;
}

console.log(rotateLeft(3, [1, 2, 3, 4, 5]))
