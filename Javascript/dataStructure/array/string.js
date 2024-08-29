

// treat strings as the arrays of charchater. 

const str = ['a', 'b', 'c', 'd', 'e']


//push 
str.push('x');  //O(1)
console.log(str)

//pop
str.pop()     //O(1)
console.log(str)

//unshift
str.unshift('r')     //O(n)
console.log(str)

//shift
str.shift()       //O(n)
console.log(str)

//splice 
str.splice(3, 0, 'm');     //O(n)
console.log(str)


