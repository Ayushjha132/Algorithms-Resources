

/*
 * Selection sort: This algorthims work by finding and moving the smallest elemnet to the beginning of the array. 
 * 
 * Time Complexity : O(n^2) Avg, Best and worst cases 
 * Space Complexity : O(1)
 *
 * Working : Moving elemnet by selecting the samllest one moveing to beginning of the array and repeating the value.
 *
 */


arr = [99, 44, 6, 2, 5, 9, 1, 0, 67];

function seclectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {

      }
    }
  }
} 
