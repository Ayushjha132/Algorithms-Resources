

//Google Questions
//Given an Array = [2, 5, 1, 2 ,3, 5, 1, 2, 4];
//it should return 2

// Given an Array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// it should return 1

//Given an Array = [2, 3, 4, 5]
//it should return undefined

function firstRecurringCharacter(nums) {
  if (!nums.length) return undefined;  // on empty arr.

  for (let i = 1; i < nums.length; i++) {
    for (let j = i--; j >= 0; j--) {    // keeping inner loop one less then outer loop
      if (nums[i] === nums[j]) return nums[i];
    }
  }
  return undefined;
}
//O(n^2) time Complexity


/*
function firstRecurringChar(nums) {
  let data = {};

  if (!nums.length) return undefined;  // on empty arr.

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in data) {    // check element in object
      return nums[i];
    } else {
      data[nums[i]] = true;
    }
  }
}
// O(n) Both Space and Time Complexity
*/
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));

console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));

console.log(firstRecurringCharacter([2, 5, 3, 4, 6]));


