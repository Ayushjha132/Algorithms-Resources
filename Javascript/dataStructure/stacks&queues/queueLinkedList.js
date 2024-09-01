

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this


  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }

  printQueue() {
    let currentNode = this.first;
    let array = [];
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let newQueue = new Queue();
newQueue.enqueue(23);
newQueue.enqueue(10);
newQueue.enqueue(45);
console.log(newQueue.printQueue());
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
console.log(newQueue);
console.log(newQueue.printQueue());

