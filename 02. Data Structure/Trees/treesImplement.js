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

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        // Go left
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        // Go right
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        // Ignore duplicate values
        return;
      }
    }
  }

  // Search for a value in the BST
  search(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return true; // Value found
      }

      if (value < current.value) {
        current = current.left; // Go left
      } else {
        current = current.right; // Go right
      }
    }

    return false; // Value not found
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (node === null) {
      return null; // Value not found
    }

    if (value < node.value) {
      // Traverse left subtree
      node.left = this._deleteNode(node.left, value);
    } else if (value > node.value) {
      // Traverse right subtree
      node.right = this._deleteNode(node.right, value);
    } else {
      // Node found
      if (node.left === null && node.right === null) {
        // Case 1: Node has no children
        return null;
      } else if (node.left === null) {
        // Case 2: Node has only right child
        return node.right;
      } else if (node.right === null) {
        // Case 2: Node has only left child
        return node.left;
      } else {
        // Case 3: Node has two children
        const minLargerNode = this._findMin(node.right);
        node.value = minLargerNode.value; // Replace with smallest value in the right subtree
        node.right = this._deleteNode(node.right, minLargerNode.value); // Delete the duplicate
      }
    }

    return node;
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // In-order Traversal (Left, Root, Right)
  inOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}
