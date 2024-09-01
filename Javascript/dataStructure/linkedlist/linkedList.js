
// java has buit in linkedlist but javascript & python doesn't .
// BUt, it is achieved with object property by building ndoe (head, tail) .

// Linked list 
// node // head // tail 
// each node pointing to next node
// linkedList must have head and the tail 
// if one item in linkedList that will point head and tail at same node and tail's next points to null 
// tails next always points to null value. the end of the list. 

// structure :  14 --> 20 --> 12

/*
 * let myLinkedList = {
 *  head: {
 *    value: 14,
 *    next: {
 *      value: 20,
 *      next: {
 *        value: 12,
 *        next: null
 *      }
 *    }
 *  }
 * }
 *
 */

// optimize this with another class to follow DRY concept.
//
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {       // linkedList insenceate 
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // O(1)

  // 50 --> 12 --> 23 --> 90 --> null
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // O(1)

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  //O(n) 

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
    // something behind the current size of linked list 
    if (index >= this.length) {
      return this.append(value);
    }
    // adding a specifc index in the existing list.
    // add a new node with value.
    const newNode = new Node(value);
    // reach to the index position
    const leader = this.traversalToIndex(index - 1);

    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // index doesn't exists (add checklist)

    const leader = this.traversalToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  reverse1() {
    if (!this.head.next) {
      return this.head;
    }
    let prevNode = null;
    let nextNode = null;
    let headNode = this.head;
    this.tail = this.head;

    while (headNode !== null) {
      nextNode = headNode.next;
      headNode.next = prevNode;
      prevNode = headNode;
      headNode = nextNode;
    }
    this.head = prevNode;
    return this
  }
}
//o(n)


// 12 --> 23 --> 90  --> 50 --> 12 --> 8
//

const myLinkedList = new LinkedList(12);
myLinkedList.append(23);
myLinkedList.append(90);
myLinkedList.prepend(50);
myLinkedList.insert(2, 40);
myLinkedList.insert(30, 11);
//myLinkedList.remove(4);
console.log(myLinkedList.printList());
myLinkedList.reverse1();
console.log(myLinkedList.printList());
