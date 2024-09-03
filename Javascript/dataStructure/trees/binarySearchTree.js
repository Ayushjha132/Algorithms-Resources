
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this
          }
          currentNode = currentNode.right;
        }
      }

    }
  }

  //search
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return true;
      }
    }
    return false;
  }

  remove(value) {
    if (this.lookup(value)) {

    }
    return 'element not found';
  }
}

const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(79);
tree.insert(7);
tree.insert(20);
tree.insert(1);
tree.insert(59);

console.log(tree.lookup(23));
