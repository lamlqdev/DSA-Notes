# Hash Table

## 1. Hash Function

### 1.1. Definition

A hash function generates a value of fixed length (hash) from an input.

Properties:

- Deterministic: Same input always produces the same output.
- One-way: You cannot reverse-engineer the input from the output.
- Sensitive to changes: Even minor changes in input (like capitalization) create a completely different output.

### 1.2. Examples

Common hash functions: MD5, SHA-1, SHA-256.

***Example:*** Input hello → Hash: 5d41402abc4b2a76b9719d911017c592.

### 1.3. Purpose in Hash Tables

Convert keys (e.g., "grapes") into an index or memory address to store and retrieve data efficiently.

Ensures O(1) time complexity for adding/retrieving data.

<p align="center">
    <img src="../assets/hashtable.png">
</p>

### 1.4. How It Works in Hash Tables

Key is passed through the hash function to generate a "gibberish" value.

This value is then mapped to an index or memory address for storage.

***Example:*** Key "grapes" → Hash → Mapped to memory address → Store value 10,000.

## 2. Hash Table

### 2.1. Definition

A data structure that stores data as key-value pairs.

Keys are used to find values efficiently.

### 2.2. How It Works

You provide a key (e.g., "grapes"), which is hashed using a hash function.

The hash is then mapped to a specific memory location (address) where the value is stored.

### 2.3. Operations

Insertion: O(1) time complexity. The key is hashed to find the memory address, and the value is stored there.

Lookup: O(1). The hash function maps the key to the memory address to retrieve the value.

Deletion: O(1). The key is hashed to locate and remove the value.

### 2.4. Hash Table Advantages

Fast Access: O(1) for insertion, lookup, and deletion.

No need to reorder: Unlike arrays, deleting items in hash tables doesn’t require index shifting.

Flexible key types: Strings, numbers, or other types can be used as keys.

## 3. Hash Collision

### 3.1. Memory Allocation

Hash table uses a limited number of buckets to store data.

If too much data is added, multiple keys may hash to the same bucket, causing collisions.

### 3.2. Collisions

Occurs when two keys map to the same bucket.

Slows down operations like insert, lookup, and delete.

<p align="center">
    <img src="../assets/hashtable-collision.png">
</p>

### 3.3. Collision Handling

Separate Chaining: Store colliding keys in a linked list within the bucket.

Open Addressing: Find another empty bucket for the colliding key.

## 4. Playground
```js
class HashTable {
  constructor(size = 10) {
    this.table = new Array(size); // Initialize the hash table as an array with a fixed size
    this.size = size; // Store the table size for hashing purposes
  }

  // Hash function: Converts a key into an index
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i); // Sum the ASCII values of all characters in the key
    }
    return hashCode % this.size; // Map the hash code into the table size range
  }

  // Insert or update a key-value pair in the hash table
  set(key, value) {
    const index = this.hash(key); // Get the index using the hash function
    if (!this.table[index]) {
      this.table[index] = []; // Initialize a bucket (array) if it does not exist
    }

    // Check if the key already exists in the bucket and update the value
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) { // Compare keys
        this.table[index][i][1] = value; // Update the value if key exists
        return; // Exit after updating
      }
    }

    // If the key does not exist, add a new key-value pair to the bucket
    this.table[index].push([key, value]);
  }

  // Retrieve the value associated with a key
  get(key) {
    const index = this.hash(key); // Get the index using the hash function
    const bucket = this.table[index]; // Retrieve the bucket at the index

    if (bucket) {
      // Iterate through the bucket to find the matching key
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) { // Compare keys
          return bucket[i][1]; // Return the value if key is found
        }
      }
    }
    return undefined; // Return undefined if the key does not exist
  }

  // Delete a key-value pair from the hash table
  delete(key) {
    const index = this.hash(key); // Get the index using the hash function
    const bucket = this.table[index]; // Retrieve the bucket at the index

    if (bucket) {
      // Iterate through the bucket to find the matching key
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) { // Compare keys
          bucket.splice(i, 1); // Remove the key-value pair from the bucket
          return true; // Return true after successful deletion
        }
      }
    }
    return false; // Return false if the key does not exist
  }

  // Display the entire hash table
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(`${i}: ${JSON.stringify(this.table[i])}`); // Print non-empty buckets
      } else {
        console.log(`${i}: []`); // Print empty buckets
      }
    }
  }
}
```

Usage: 
```js
const hashTable = new HashTable(5);

hashTable.set("name", "John"); // Insert key-value pair: name -> John
hashTable.set("age", 25); // Insert key-value pair: age -> 25
hashTable.set("city", "New York"); // Insert key-value pair: city -> New York
hashTable.set("email", "john@example.com"); // Insert key-value pair: email -> john@example.com
hashTable.set("phone", "1234567890"); // Insert key-value pair: phone -> 1234567890

console.log("Get 'name':", hashTable.get("name")); // Retrieve value for key 'name'
console.log("Get 'age':", hashTable.get("age")); // Retrieve value for key 'age'

hashTable.delete("city"); // Delete key-value pair with key 'city'
console.log("After deleting 'city':");
hashTable.display(); // Display the entire hash table

console.log("Get 'city':", hashTable.get("city")); // Attempt to retrieve deleted key 'city'
```