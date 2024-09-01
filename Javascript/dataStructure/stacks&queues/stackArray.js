

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this
  }

  pop() {
    this.array.pop()
    return this
  }

  isEmpty() {
    return this.array.length === 0 ? true : false;
  }

  printStack() {
    console.log(this.array)
  }
}

let newStack = new Stack();

newStack.push(32);
newStack.push(12);
console.log(newStack.peek());
newStack.push(90);
console.log(newStack.isEmpty());
newStack.printStack();
console.log(newStack)
