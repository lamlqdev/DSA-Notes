# 💬 Problem 21: Merge Two Sorted Lists

## 📝 Problem Statement

You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

## 📚 Example

**Example 1:**

**Input:**

```
list1 = [1,2,4], list2 = [1,3,4]
```

**Output:**

```
[1,1,2,3,4,4]
```

**Example 2:**

**Input:**

```
list1 = [], list2 = []
```

**Output:**

```
[]
```

**Example 3:**

**Input:**

```
list1 = [], list2 = [0]
```

**Output:**

```
[0]
```

## 📏 Constraints

- The number of nodes in both lists is in the range `[0, 50]`
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order

## 🎯 Solution

### Approach 1: Iterative Approach 🚀

#### _Description:_

> Create a dummy node as the start of the merged list. Compare nodes from both lists and attach the smaller one to the merged list. Continue until we reach the end of either list, then append the remaining nodes.

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

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
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        current.next = list1 ?? list2;

        return dummy.next;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n + m)`
  - **Explanation**: Where n and m are the lengths of the input lists. We traverse each node exactly once.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a constant amount of extra space regardless of input size.

### Approach 2: Recursive Approach

#### _Description:_

> Recursively merge the lists by comparing the current nodes and making recursive calls on the remaining lists.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}
```

##### C#

```csharp
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        if (list1.val <= list2.val) {
            list1.next = MergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = MergeTwoLists(list1, list2.next);
            return list2;
        }
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n + m)`
  - **Explanation**: Where n and m are the lengths of the input lists. We make one recursive call for each node.
- **Space Complexity:**
  - **Value**: `O(n + m)`
  - **Explanation**: Due to the recursive call stack, which can go as deep as the total number of nodes.
