# 💬 Problem 237: Delete Node in a Linked List

## 📝 Problem Statement

There is a singly-linked list `head` and we want to delete a node `node` in it.

You are given the node to be deleted `node`. You will **not be given access** to the first node of `head`.

All the values of the linked list are **unique**, and it is guaranteed that the given node `node` is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

- The value of the given node should not exist in the linked list.
- The number of nodes in the linked list should decrease by one.
- All the values before node should be in the same order.
- All the values after node should be in the same order.

## 📚 Example 1

**Input:**

```
head = [4,5,1,9], node = 5
```

**Output:**

```
[4,1,9]
```

**Explanation:**

```
You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

## 📚 Example 2

**Input:**

```
head = [4,5,1,9], node = 1
```

**Output:**

```
[4,5,9]
```

**Explanation:**

```
You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
```

## 📏 Constraints

- The number of nodes in the given list is in the range `[2, 1000]`
- `-1000 <= Node.val <= 1000`
- The value of each node in the list is **unique**
- The `node` to be deleted is **in the list** and **is not a tail** node.

## 🎯 Solution

### Approach 1: Copy Next Node's Value 🚀

#### _Description:_

> Since we can't access the previous node, we can copy the next node's value to the current node and delete the next node instead.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}
```

##### C#

```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public void DeleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only perform constant time operations.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: No extra space is used.

### Approach 2: Node Value Shifting

#### _Description:_

> Another way to think about it is to shift all values one position to the left starting from the node to be deleted.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {ListNode} node
 * @return {void}
 */
function deleteNode(node) {
  let current = node;
  while (current.next.next) {
    current.val = current.next.val;
    current = current.next;
  }
  current.val = current.next.val;
  current.next = null;
}
```

##### C#

```csharp
public class Solution {
    public void DeleteNode(ListNode node) {
        ListNode current = node;
        while (current.next.next != null) {
            current.val = current.next.val;
            current = current.next;
        }
        current.val = current.next.val;
        current.next = null;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: In worst case, we might need to traverse until the second last node.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: No extra space is used.
