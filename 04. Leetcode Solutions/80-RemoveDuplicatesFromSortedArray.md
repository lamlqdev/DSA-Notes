# 💬 Problem 80: Remove Duplicates from Sorted Array II

## 📝 Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The relative order of the elements should be kept the same.

Return _k_ after placing the final result in the first _k_ slots of `nums`.

Do not allocate extra space for another array. You must do this by modifying the input array **in-place** with O(1) extra memory.

## 📚 Example

**Example 1:**

**Input:**

```
nums = [1,1,1,2,2,3]
```

**Output:**

```
5, nums = [1,1,2,2,3,_]
```

**Explanation:**

```
Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
```

**Example 2:**

**Input:**

```
nums = [0,0,1,1,1,1,2,3,3]
```

**Output:**

```
7, nums = [0,0,1,1,2,3,3,_,_]
```

**Explanation:**

```
Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
```

## 📏 Constraints

- 1 <= nums.length <= 3 \* 10<sup>4</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- `nums` is sorted in **non-decreasing** order

## 🎯 Solution

### Approach 1: Two Pointers 🚀

#### _Description:_

> Use two pointers: one for iterating through the array and another for placing elements in their correct position. Keep track of count for each number to ensure at most two occurrences.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length <= 2) return nums.length;

  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
```

##### C#

```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length <= 2) {
            return nums.Length;
        }

        int k = 2;

        for (int i = 2; i < nums.Length; i++) {
            if (nums[i] != nums[k-2]) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We traverse the array once, where n is the length of the input array.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a constant amount of extra space regardless of input size.

### Approach 2: Count Method

#### _Description:_

> Keep track of the count of each element and only include elements up to two occurrences.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let count = 1;
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
```

##### C#

```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int count = 1;
        int k = 1;

        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] == nums[i-1]) {
                count++;
            } else {
                count = 1;
            }

            if (count <= 2) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We traverse the array once.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a constant amount of extra space.
