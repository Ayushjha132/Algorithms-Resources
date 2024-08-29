// Move Zeroes


// navie approach
let moveZeroes = function (nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      newArr.push(nums[i])
    }
  }
  if (nums.length !== newArr.length) {
    const diff = nums.length - newArr.length
    for (let i = 0; i < diff; i++) {
      newArr.push(0);
    }
  }

  return newArr;
};
// O(n) time and space


let moveZeroes2 = function (nums) {
  let countZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      delete nums[i]
      countZero++;
    }
  }
  for (let i = 0; i < countZero; i++) {
    nums.push(0);
  }
  return nums;
}
// O(n) time complexity

console.log(moveZeroes2([1, 0, 3, 12, 0, 6]))
//Output: [1,3,12,0,0]
