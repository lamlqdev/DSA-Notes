// Node class to represent each element in the stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Points to the next node
  }
}

// Stack class using a Linked List
class Stack {
  constructor() {
    this.top = null; // Points to the top node in the stack
    this.size = 0;   // Keeps track of the number of elements
  }

  // Push: Add a new node to the top of the stack
  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode; // If stack is empty, new node becomes top
    } else {
      newNode.next = this.top; // Point new node's next to the current top
      this.top = newNode;      // Update top to the new node
    }
    this.size++;
  }

  // Pop: Remove and return the top node of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedValue = this.top.value;
    this.top = this.top.next; // Move top to the next node
    this.size--;
    return poppedValue;
  }

  // Peek: View the top node's value without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.value;
  }

  // isEmpty: Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // getSize: Return the current size of the stack
  getSize() {
    return this.size;
  }

  // Print: Display the stack elements
  print() {
    let current = this.top;
    let result = "";
    while (current) {
      result += `${current.value} -> `;
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Example Usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top Element:", stack.peek()); // Output: 30
console.log("Stack Size:", stack.getSize()); // Output: 3

console.log("Popped Element:", stack.pop()); // Output: 30
console.log("Top Element after Pop:", stack.peek()); // Output: 20

stack.print(); // Output: 20 -> 10 -> null
