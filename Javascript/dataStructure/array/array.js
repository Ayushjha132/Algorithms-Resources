

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  // push method return last pushed item into the array
  push(item) {
    this.data[this.length] = item
    this.length++;
    return this.length;
  }

  // pop method return last deleted item  
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--;
    return lastItem;
  }

  // delete method return deleted item 
  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i++]
    }
    delete this.data[this.length - 1]
    this.length--;
  }


}

const newArr = new MyArray();

newArr.push(2);
console.log(newArr);
newArr.push(3);
console.log(newArr);
newArr.push(6);
console.log(newArr);
newArr.push(5);
console.log(newArr);
newArr.pop();
console.log(newArr);
newArr.delete(2);



console.log(newArr);
