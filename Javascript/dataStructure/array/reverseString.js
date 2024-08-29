
/*
create a function that reverse the string.

*/
// using js split() method 
/*
function reverseString(str) {
  // check the input 
  //
  if (!str || str.length < 2 || typeof str !== 'string') return 'hmm not good';

  const arrString = str.split("");
  console.log(arrString);
  const reverseArr = [];

  for (let i = arrString.length - 1; i >= 0; i--) {
    reverseArr.push(arrString[i]);
  }

  return reverseArr.join("");
}

console.log(reverseString('How are you doing'));

*/

// string itself is a array of charchater.

function reverseString2(str) {
  // check the input 
  //
  if (!str || str.length < 2 || typeof str !== 'string') return 'hmm not good';

  const reverseArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }

  return reverseArr.join("");
}

console.log(reverseString2('How are you doing'));


function reverseString3() {
  // check the input 
  if (!str || str.length < 2 || typeof str !== 'string') return 'hmm not good';
  return str.split('').reverse().join('');
}

const reverseString4 = str => {
  // check the input 
  if (!str || str.length < 2 || typeof str !== 'string') return 'hmm not good';
  return [...str].reverse().join('');
}

str1 = 'hello i am ayush';
console.log([...str1])
console.log(reverseString4('hello from reverse string 4 function'));



