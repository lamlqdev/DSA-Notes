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

// Test the Hash Table implementation
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
