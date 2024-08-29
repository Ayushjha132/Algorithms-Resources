


// merge two sorted array and the final arrays should be sorted as well
// array1 = [ 1,2, 3, 6, 7] array2 = [2, 2, 5, 8, 9, 11]
// result = [1, 2, 2, 2, 3, 5, 6, 7, 8, 9, 11]
//

// taking the initial passed array is sorted.

array1 = [1, 2, 3, 6, 7];
array2 = [2, 2, 5, 8, 9, 11];

// usign build in sort((a,b)=> a-b); 
/*
function mergeSortedArrays(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  return arr1.sort((a, b) => a - b);
}

console.log(mergeSortedArrays(array1, array2));

*/

function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const sortedArr = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i, j = 1;


  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      sortedArr.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      sortedArr.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return sortedArr;
}
console.log(mergeSortedArrays(array1, array2));
