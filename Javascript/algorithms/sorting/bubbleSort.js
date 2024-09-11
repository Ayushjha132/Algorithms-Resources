
/*
  *   Implemeting Bubble Sort Algorithms 
  *
  *   Bubble Sort:
  *     Time complexity: O(n^2) --> Avg & Worts 
  *                    : O(n) --> Best Case. When array is already sorted.
  *     Space complexity: O(1)
  *
  */

// Bubble sort work by the bubbling up the elements and go from matching one elements with next elements
// if found one with higher precision move to end of the array. And, this keep doing till the length of the array.


arr = [43, 34, 1, 4, 56, 5, 9, 18, 10, 23];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));


