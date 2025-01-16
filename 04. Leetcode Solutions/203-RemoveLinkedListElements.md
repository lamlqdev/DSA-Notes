# 💬 Problem 203: Remove Linked List Elements

## 📝 Problem Statement

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return _the new head_.

## 📚 Example 1

**Input:**

```
head = [1,2,6,3,4,5,6], val = 6
```

**Output:**

```
[1,2,3,4,5]
```

## 📚 Example 2

**Input:**

```
head = [], val = 1
```

**Output:**

```
[]
```

## 📚 Example 3

**Input:**

```
head = [7,7,7,7], val = 7
```

**Output:**

```
[]
```

## 📏 Constraints

- The number of nodes in the list is in the range `[0, 104]`
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

## 🎯 Solution

### Approach 1: Iterative with Dummy Node 🚀

#### _Description:_

> Use a dummy node to handle the case when head needs to be removed. Then iterate through the list and skip nodes with matching values.

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
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
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
    public ListNode RemoveElements(ListNode head, int val) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode current = dummy;

        while (current.next != null) {
            if (current.next.val == val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return dummy.next;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We traverse the linked list once, where n is the number of nodes.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a constant amount of extra space.

### Approach 2: Recursive 🚀

#### _Description:_

> Use recursion to solve the problem by first handling the rest of the list and then deciding whether to include the current node.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  if (!head) return null;

  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
}
```

##### C#

```csharp
public class Solution {
    public ListNode RemoveElements(ListNode head, int val) {
        if (head == null) return null;

        head.next = RemoveElements(head.next, val);
        return head.val == val ? head.next : head;
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
