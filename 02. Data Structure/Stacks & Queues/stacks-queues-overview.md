# Stacks & Queues

## 1. Stack

### 1.1. Definition

**Stacks** are **linear data structures** that follow the **LIFO (Last In, First Out)** principle.

Think of it as a stack of plates: you can only access the top plate

### 1.2. Real-world Use Cases

`Function Calls`: Programming languages use stacks to manage function calls. Example: Nested functions (A → B → C) are popped off the stack in reverse order.

`Browser History`: Clicking Back and Forward uses a stack to store page history.

`Undo/Redo`: Text editors use stacks to store previous states for undo and redo functionality.

### 1.3. Stack Operations

`push`: Add an item to the top of the stack.

`pop`: Remove the top item from the stack.

`peek`: View the top item without removing it.

<p align="center">
    <img src="../assets/stack-operations.png">
</p>

### 1.4. Efficiency

Lookup: Traversing through the stack has a time complexity of O(n).
Stacks are not designed for random access like arrays.

### 1.5. Two approaches of implementing a Stack

*`Stack using array`*:

```js
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
```
Example Usage:
```js
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top Element:", stack.peek()); // Output: 30
console.log("Stack Size:", stack.size()); // Output: 3

console.log("Popped Element:", stack.pop()); // Output: 30
console.log("Top Element after Pop:", stack.peek()); // Output: 20

stack.print(); // Output: 10 20

```

| Advantages                                                             | Disadvantages                                                                                 |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Simple and easy to implement.                                         | Push (array.push()) can be costly if the array resizes.                                    |
| Direct access to elements is possible (although not stack behavior). | Pop (array.shift() or unshift) is inefficient for large arrays when removing from the front. |
| Built-in array methods like push, pop, and peek are readily available. | Memory allocation can waste space if the array size is pre-reserved but unused.             |

*`Stack using linked list`*:

```js
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
```

Example Usage:
```js
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top Element:", stack.peek()); // Output: 30
console.log("Stack Size:", stack.getSize()); // Output: 3

console.log("Popped Element:", stack.pop()); // Output: 30
console.log("Top Element after Pop:", stack.peek()); // Output: 20

stack.print(); // Output: 20 -> 10 -> null

```

| Advantages                                                              | Disadvantages                                                             |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Dynamic size: No need to pre-define size, making it more memory-efficient. | More complex to implement (requires managing nodes and pointers).         |
| Efficient operations: push and pop are always O(1).                       | Slightly higher memory consumption due to storing next pointers.          |
| No resizing issues like arrays.                                          | Traversing the stack (for printing or lookup) takes O(n).                 |
| Preferred for large datasets.                                            |                                                                           |

*`When to use each implementation`*:

| Scenario                          | Preferred Implementation                     |
|-----------------------------------|---------------------------------------------|
| Small stack size                  | Array (easy to implement).                  |
| Large and unknown stack size      | Linked List (dynamic size, no resizing).    |
| Operations limited to push/pop    | Linked List (efficient O(1) operations).    |
| Memory-efficient requirement      | Array (less overhead than linked list).     |

## 2. Queue

### 2.1. Definition

**Queues** are **linear data structures** that follow the **FIFO (First In, First Out)** principle.

Think of it like a roller coaster line: The first person in line gets served first.

### 2.2. Real-world Use Cases

`Waitlist Applications`: Concert tickets or restaurant reservations.

`Ride-Hailing Apps`: Uber or Lyft prioritize requests in the order they were made.

`Printers`: Printing jobs are handled in the order they were queued.

### 2.3. Queue Operations

`enqueue` (or `push`): Add an item to the end of the queue.

`dequeue`: Remove an item from the front of the queue.

`peek`: View the first item in the queue without removing it.

<p align="center">
    <img src="../assets/queue-operations.png">
</p>

### 2.4. Efficiency

Using arrays to implement queues is inefficient because:

- Removing the first item (unshift) requires shifting all indexes.
- This results in a time complexity of O(n).

Queues are better implemented with linked lists for efficient enqueue and dequeue operations.

### 2.5. Queue Implementaion with Linked List
```js
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
```
Example Usage

```js
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("First Element:", queue.peek()); // Output: 10
console.log("Dequeued:", queue.dequeue());   // Output: 10

console.log("Queue after Dequeue:");
queue.print(); // Output: 20 <- 30 <- null

```