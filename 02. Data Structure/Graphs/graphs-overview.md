# Graphs

## 1. Introduction

### Definition

- A **graph** is **a set of nodes (vertices) connected by edges**. Represents pairwise relationships between values. Components:
  - **Node/Vertex**: Represents an individual entity
  - **Edge**: Represents the relationship between two nodes

<p align="center">
    <img src="../assets/graph.png">
</p>

### Applications

- Social networks (e.g., Facebook for friendships).
- Recommendation engines (e.g., Amazon for product suggestions).
- Navigation systems (e.g., Google Maps for shortest paths).
- Others: Family trees, the World Wide Web, road networks, etc.

### Key Properties

- Graphs are a versatile data structure for modeling real-world connections.
- Linked lists and trees are specific types of graphs.

<p align="center">
    <img src="../assets/graph-real-world.png">
</p>

## 2. Type of Graphs

### Directed & Undirected Graph

| Type             | Description                              | Example                |
|------------------|------------------------------------------|------------------------|
| Directed Graph   | Edges have direction (one-way).          | Twitter (user follows) |
| Undirected Graph | Edges are bi-directional (two-way).      | Facebook (friendship)  |

<p align="center">
    <img src="../assets/graph-directed-undirected.png">
</p>

### Weighted vs. Unweighted Graph

| Type             | Description                                | Example                     |
|------------------|--------------------------------------------|-----------------------------|
| Weighted Graph   | Edges have weights (e.g., distance, cost). | Google Maps (shortest path) |
| Unweighted Graph | Edges do not carry additional information. | Basic networks.             |

<p align="center">
    <img src="../assets/graph-weighted-unweighted.png">
</p>

### Cyclic vs. Acyclic

| Type            | Description                               | Example            |
|-----------------|-------------------------------------------|--------------------|
| Cyclic Graph    | Contains cycles (can return to the start).| Road networks.     |
| Acyclic Graph   | No cycles; cannot return to the start.    | Trees.             |

<p align="center">
    <img src="../assets/graph-cyclic-acyclic.png">
</p>

## 3. Playground
```js
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    //undirected Graph
    if (!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2);
    }
    if (!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1);
    }
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}
```

Usage:
```js
const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
```