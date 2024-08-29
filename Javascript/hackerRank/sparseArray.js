// Write your code here
// stringList = ['ab', ab', abc'];
// queries = ['ab', abc', bc'];

/* countObject = {
                      'ab': 0,
                       abc: 0,
                       bc': 0
                  }
 
*/

// navie approach (don't care if the string is something which is not in the queries).
function matchingStrings(stringList, queries) {

  let countString = {};
  for (let i = 0; i < queries.length; i++) {
    countString[queries[i]] = 0;  //inital count 0;
  }
  console.log('object', countString);
  for (let i = 0; i < stringList.length; i++) {
    if (Object.keys(countString).includes(stringList[i])) {
      countString[stringList[i]] += 1;
    }
  }
  console.log('object with updated values', countString);

  return Object.values(countString);
}

// taking care of those string values which are not available in the queries. 
function matchingStrings2(stringlist, queries) {

  let countstring = {};
  for (let i = 0; i < queries.length; i++) {
    countstring[queries[i]] = 0;  //inital count 0;
  }
  console.log('object', countstring);
  for (let i = 0; i < stringlist.length; i++) {
    // this part is wrong beacuse it tries to increament the object key values dispit it doesn't exist in the object. 
    // if (object.keys(countstring).includes(stringlist[i])) {
    if (countstring.hasOwnProperty(stringlist[i]))
      countstring[stringlist[i]] += 1;
  }

  console.log('object with updated values', countstring)

  return Object.values(countstring);
}



console.log(matchingStrings2(["'ab'", "'ab'", "abc'"], ["'ab'", "abc'", "bc'"])); 
