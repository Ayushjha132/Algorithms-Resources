

/*
 * Selection sort: This algorthims work by finding and moving the smallest elemnet to the beginning of the array. 
 * 
 * Time Complexity : O(n^2) Avg, Best and worst cases 
 * Space Complexity : O(1)
 *
 * Working : Moving elemnet by selecting the samllest one moveing to beginning of the array and repeating the value.
 * Implemantation: Selecting one elemnet as min or max and keep checking that with other if new min/max come up swap with that. 
 *
 */


arr = [99, 44, 6, 2, 5, 9, 1, 0, 67];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    arr[i] = arr[min]
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort(arr))
