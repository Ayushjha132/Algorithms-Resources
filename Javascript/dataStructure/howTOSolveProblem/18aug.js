
// for arr1 = ['a', 'b', 'c', 'd', 'x']
//     arr2 = ['z', 'y', 'i']
//  should result false
//
//
//  for arr1 = ['a', 'b', 'c', 'd', 'x']
//      arr2 = ['z', 'y', 'x']
// should return true
//
//

const arr1 = ['a', 'b', 'c', 'd', 'x']
const arr2 = ['z', 'y', 'i']

/*
function checkCommon(arr1, arr2) {
  for (let ele1 of arr1) {
    for (let ele2 of arr2) {
      if (ele1 === ele2) {
        return true;
      }
    }
  }
  return false;
}

console.log(checkCommon(arr1, arr2));
*/

// O(a * b)
//O(n^2) Time complexity
// O(1) Space complexity


// changing in approach : Solve this problem in optimial BigO time complexity. 
//

/*
function checkCommon2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array 

  let map = {}
  for (let ele1 of arr1) {
    if (!map[ele1]) {
      map[ele1] = true;
    }
  }
  console.log(map);

  // loop through second array check item exists in created object. 
  for (let ele2 of arr2) {
    if (map[ele2]) {
      return true;
    }
  }
  return false;
}
*/

// O(a + b) Time complexity
// O(a) Space complexity

// console.log(checkCommon2(arr1, arr2));



function checkCommon3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

console.log(checkCommon3(arr1, arr2));
