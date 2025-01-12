# 💬 Problem 876: Middle of the Linked List

## 📝 Problem Statement

Given the `head` of a singly linked list, return _the middle node of the linked list_.

If there are two middle nodes, return _the second middle node_.

## 📚 Example 1

**Input:**

```
head = [1,2,3,4,5]
```

**Output:**

```
[3,4,5]
```

**Explanation:**

```
The middle node of the list is node 3.
```

## 📚 Example 2

**Input:**

```
head = [1,2,3,4,5,6]
```

**Output:**

```
[4,5,6]
```

**Explanation:**

```
Since the list has two middle nodes with values 3 and 4, we return the second one.
```

## 📏 Constraints

- The number of nodes in the list is in the range `[1, 100]`
- `1 <= Node.val <= 100`

## 🎯 Solution

### Approach 1: Fast and Slow Pointers 🚀

#### _Description:_

> Use two pointers, where the fast pointer moves twice as fast as the slow pointer. When the fast pointer reaches the end, the slow pointer will be at the middle.

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
function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
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
    public ListNode MiddleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We traverse the linked list once, where n is the number of nodes.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use two pointers regardless of input size.

### Approach 2: Count and Traverse 

#### _Description:_

> First count the total nodes, then traverse to the middle node.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  current = head;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    current = current.next;
  }

  return current;
}
```

##### C#

```csharp
public class Solution {
    public ListNode MiddleNode(ListNode head) {
        int length = 0;
        ListNode current = head;

        while (current != null) {
            length++;
            current = current.next;
        }
****
        current = head;
        for (int i = 0; i < length / 2; i++) {
            current = current.next;
        }

        return current;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We traverse the linked list twice - once to count nodes and once to find the middle.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a counter variable and a pointer regardless of input size.
