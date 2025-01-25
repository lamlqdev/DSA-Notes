# Arrays

## 1. Introduction

**Arrays (or lists)** are one of the **most common and simple** data structures, which organize items sequentially in memory. \
Operations of Array:

| Operation | Description    | Time Complexity | Explanation |
|-----|-------------|-----------|------------|
| Access   | Accessing an element by index   | O(1)      | Direct access to any element, as items are stored contiguously in memory.    |
| Push (at the end)   | Adding an element to the end of the array   | O(1)      | No shifting required; new item is appended at the end of the array.   |
| Pop (from the end)   | Removing the last element from the array | O(1)    | No shifting required; last item is removed.   |
| Unshift (at the beginning)   | Adding an element at the beginning of the array | O(n) | All elements need to be shifted to make space for the new item. |
| Splice (at a specific index)   | Inserting or removing an element at a specific index | O(n)     | Elements need to be shifted, depending on whether you are inserting or deleting.   |
| Traversal   | Iterating over all elements in the array | O(n) | Each element is visited once in a linear fashion.   |

- Fast Operations: Access, Push, and Pop at the end of the array are all fast with O(1) time complexity.
- Slower Operations: Inserting or deleting from the beginning or middle of the array (Unshift, Splice) involves O(n) time complexity due to the need to shift elements.

## 2. Static & Dynamic Arrays

| Aspect               | Static Arrays                                      | Dynamic Arrays                                      |
|----------------------|---------------------------------------------------|-----------------------------------------------------|
| Size                 | Fixed size, must be specified ahead of time.      | Can dynamically resize as needed.                   |
| Memory Allocation    | Fixed allocation of memory, no room for expansion.| Memory is reallocated and expanded when the array grows. |
| Element Addition     | Requires copying and reallocating the entire array when adding elements beyond the initial size. | Items are added seamlessly, with automatic memory expansion. |
| Memory Management    | Manual memory management, requires knowledge of available space. | Automatic memory management, with no need for manual intervention. |
| Languages            | C++, languages with static arrays.                | JavaScript, Python, Java (ArrayList), languages with dynamic arrays. |
