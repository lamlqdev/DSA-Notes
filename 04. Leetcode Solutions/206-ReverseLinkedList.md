# 💬 Problem 206: Reverse Linked List

## 📝 Problem Statement

Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.

## 📚 Example 1

**Input:**

```
head = [1,2,3,4,5]
```

**Output:**

```
[5,4,3,2,1]
```

## 📚 Example 2

**Input:**

```
head = [1,2]
```

**Output:**

```
[2,1]
```

## 📚 Example 3

**Input:**

```
head = []
```

**Output:**

```
[]
```

## 📏 Constraints

- The number of nodes in the list is the range `[0, 5000]`
- `-5000 <= Node.val <= 5000`

## 🎯 Solution

### Approach 1: Iterative 🚀

#### _Description:_

> Use three pointers to keep track of previous, current, and next nodes while iterating through the list and reversing the links.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
```

##### C#

```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We traverse the linked list once, where n is the number of nodes.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a constant amount of extra space regardless of input size.

### Approach 2: Recursive

#### _Description:_

> Use recursion to reach the end of the list and then reverse the links while backtracking.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  // Base case: if the list is empty or has only one node, return the head
  if (!head || !head.next) {
    return head;
  }

  // Recursive call to reverse the rest of the list
  const reversed = reverseList(head.next);

  // Reverse the link between the current node and the next node
  head.next.next = head;
  head.next = null;

  return reversed;
}
```

##### C#

```csharp
public class Solution {
    public ListNode ReverseList(ListNode head) {
        // Base case: if the list is empty or has only one node, return the head
        if (head == null || head.next == null) {
            return head;
        }

        // Recursive call to reverse the rest of the list
        ListNode reversed = ReverseList(head.next);

        // Reverse the link between the current node and the next node
        head.next.next = head;
        head.next = null;

        return reversed;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We visit each node once during the recursion.
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: The recursion will use space on the call stack proportional to the length of the list.
