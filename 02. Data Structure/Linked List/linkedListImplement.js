// Node structure for Linked List
class Node {
  constructor(value) {
    this.value = value; // Holds the value of the node
    this.next = null;   // Pointer to the next node, initialized as null
  }
}

// Linked List Implementation
class LinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
    this.tail = null; // Pointer to the last node in the list
    this.length = 0;  // Tracks the total number of nodes in the list
  }

  // 1. Append: Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) { // If the list is empty
      this.head = newNode; // Head and tail both point to the new node
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Update the current tail's next pointer to the new node
      this.tail = newNode;      // Update the tail pointer to the new node
    }
    this.length++; // Increment the length of the list
  }

  // 2. Prepend: Add a node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) { // If the list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // Point the new node to the current head
      this.head = newNode;      // Update the head pointer to the new node
    }
    this.length++; // Increment the length of the list
  }

  // 3. Insert: Insert a node at a specific position (index)
  insert(index, value) {
    if (index < 0 || index > this.length) { // Validate index
      console.log("Index out of bounds");
      return;
    }

    if (index === 0) { // Insert at the beginning
      this.prepend(value);
      return;
    }

    if (index === this.length) { // Insert at the end
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let previous = this.head;

    // Traverse to the node just before the target index
    for (let i = 0; i < index - 1; i++) {
      previous = previous.next;
    }

    newNode.next = previous.next; // Connect new node to the next node
    previous.next = newNode;      // Connect the previous node to the new node
    this.length++; // Increment the length of the list
  }

  // 4. Delete: Remove a node at a specific position (index)
  delete(index) {
    if (index < 0 || index >= this.length) { // Validate index
      console.log("Index out of bounds");
      return;
    }

    if (index === 0) { // Remove the first node
      this.head = this.head.next; // Move the head pointer to the next node
      if (this.length === 1) this.tail = null; // Update tail if only one node existed
    } else {
      let previous = this.head;

      // Traverse to the node just before the target index
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }

      previous.next = previous.next.next; // Skip the target node

      if (index === this.length - 1) { // If deleting the last node
        this.tail = previous; // Update the tail pointer
      }
    }

    this.length--; // Decrement the length of the list
  }

  // 5. Search: Find the index of the first node with the given value
  search(value) {
    let current = this.head;
    let index = 0;

    // Traverse the list to find the value
    while (current) {
      if (current.value === value) {
        return index; // Return the index if the value is found
      }
      current = current.next; // Move to the next node
      index++;
    }
    return -1; // Return -1 if the value is not found
  }

  // Print the entire list as an array
  printList() {
    const result = [];
    let current = this.head;

    // Traverse the list and collect all node values
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result); // Output the list as an array
  }
}

// Test Linked List
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList(); // Output: [10, 20, 30]

list.prepend(5);
list.printList(); // Output: [5, 10, 20, 30]

list.insert(2, 15); // Insert 15 at index 2
list.printList(); // Output: [5, 10, 15, 20, 30]

list.delete(3); // Delete node at index 3
list.printList(); // Output: [5, 10, 15, 30]

console.log(list.search(15)); // Output: 2 (index of value 15)
console.log(list.search(100)); // Output: -1 (value not found)
