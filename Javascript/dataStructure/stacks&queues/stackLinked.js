
// standard linkedlist node with next parameter for address holding of next element.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this
  }
  // O(1)

  peek() {
    return this.top.value;
  }
  // O(1)

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === 0) {
      this.bottom = null;
    }

    //const popValue = this.top;
    this.top = this.top.next;
    this.length--;
    return this
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }

  printStack() {
    let currentNode = this.top;
    let array = [];
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  // 0(n) space and time 

}

let newStack = new Stack();
newStack.push(23);
newStack.push(34);
newStack.push(56);
newStack.push(90);
newStack.pop();

console.log(newStack.printStack());
