/*
  * Graph are repersented in three ways called 1. Edge List  2. Adjacent List  3.  Adjacent Matrix
  * These are the ways though which grpahs are made 
  * Among these we can use array or hash map or linked list to store values. 
  */


class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes += 1;
  }

  // here this is undirected graphs that's why we are pointing to one each other and while 
  // if this is an directed graphs, this will be leads to one direction pointing or other.


  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);;
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnecions = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnecions) {
        connections += vertex + ' ';
      }
      console.log(node + ' --> ' + connections);
    }
  }
}

const myGraph = new Graph();

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addEdge(0, 2);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 3);

myGraph.showConnections();



