

const arr1 = [1, 2, 3, 9]
const arr2 = [1, 2, 4, 4]

const sum = 8


// the pair of two elements return sum === 8
// all elements are integers 

// appraoch
// iterate the loop items and take items and add two and find the sum should return as 8 and break the loop (if found)
//

/*
function findSum(arr1, sum) {
  for (let ele of arr1) {
    for (let i = 1; i < arr1.length; i++) {
      if (ele + arr1[i] === sum) {
        return true;
      }
    }
  }
  return false;
}

console.log(findSum(arr2, sum));
*/

// O(n^2)
//

function findSum2(arr1, sum) {
  let newSet = new Set();

  for (let i = 0; i < arr1.length; i++) {
    if (newSet.has(arr1[i])) {
      return true;
    }
    newSet.add(sum - arr1[i])
  }

  return false;
}

console.log(findSum2(arr2, sum))

// O(n)
