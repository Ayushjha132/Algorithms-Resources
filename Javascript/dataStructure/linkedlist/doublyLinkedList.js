

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  };
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null
    }
    this.tail = this.head;
    this.length = 1;   // with indentation of class one value will be inserted and the length will be one. 
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this
  }
  // O(1)

  prepand(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this
  }
  //O (1)

  printDoublyList() {
    const array = []
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  // O (n)

  // example :      null -> 12 -> 23 -> 32 -> 0 -> 9 -> 100 -> null

  traversalToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    let leader = this.traversalToIndex(index - 1);

    /*
    * let follower = leader.next;
    * discriptive
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    */

    newNode.next = leader.next;
    newNode.prev = leader
    leader.next.prev = newNode;
    leader.next = newNode;

    this.length++;
    return this.printDoublyList();
  }
  // O(n)

  remove(index) {

    // check for index condition out off range.
    //
    const leader = this.traversalToIndex(index - 1);
    leader.next.next.prev = leader;
    leader.next = leader.next.next;

    /*
     * discriptive version
    const follower = leader.next.next;
    leader.next = follower;
    follower.prev = leader;
    */
    this.length--;
    return this.printDoublyList();
  }

}


const myDoublyList = new DoublyLinkedList(12);
myDoublyList.append(32);
myDoublyList.append(9);
myDoublyList.append(10);
myDoublyList.prepand(45);
myDoublyList.insert(3, 56)
myDoublyList.remove(1);


console.log(myDoublyList.printDoublyList())
