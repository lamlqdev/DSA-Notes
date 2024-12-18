// Node class to represent each element in the queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue class using a Linked List
class Queue {
  constructor() {
    this.front = null; // Points to the first node
    this.rear = null;  // Points to the last node
    this.size = 0;     // Keeps track of the number of elements
  }

  // Enqueue: Add a new node to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.front = this.rear = newNode; // First node in the queue
    } else {
      this.rear.next = newNode; // Link the last node to the new node
      this.rear = newNode;      // Update rear to the new node
    }
    this.size++;
  }

  // Dequeue: Remove and return the front node of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const dequeuedValue = this.front.value;
    this.front = this.front.next; // Move front to the next node
    if (this.front === null) {
      this.rear = null; // Queue is empty now
    }
    this.size--;
    return dequeuedValue;
  }

  // Peek: View the front node's value without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.front.value;
  }

  // isEmpty: Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Size: Return the size of the queue
  getSize() {
    return this.size;
  }

  // Print: Display the queue elements
  print() {
    let current = this.front;
    let result = "";
    while (current) {
      result += `${current.value} <- `;
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Example Usage
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("First Element:", queue.peek()); // Output: 10
console.log("Dequeued:", queue.dequeue());   // Output: 10

console.log("Queue after Dequeue:");
queue.print(); // Output: 20 <- 30 <- null
