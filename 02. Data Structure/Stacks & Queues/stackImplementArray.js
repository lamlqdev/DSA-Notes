class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Push: Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop: Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Peek: View the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty: Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: Return the number of elements in the stack
  size() {
    return this.items.length;
  }

  // Print: Display the stack elements
  print() {
    console.log(this.items.join(" "));
  }
}

// Example Usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top Element:", stack.peek()); // Output: 30
console.log("Stack Size:", stack.size()); // Output: 3

console.log("Popped Element:", stack.pop()); // Output: 30
console.log("Top Element after Pop:", stack.peek()); // Output: 20

stack.print(); // Output: 10 20
