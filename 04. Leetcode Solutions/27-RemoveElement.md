# 💬 Problem 27: Remove Element

## 📝 Problem Statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to val be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

## 📚 Example 1

**Input:**

```
nums = [3,2,2,3], val = 3
```

**Output:**

```
2, nums = [2,2,_,_]
```

**Explanation:**

```
Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## 📚 Example 2

**Input:**

```
nums = [0,1,2,2,3,0,4,2], val = 2
```

**Output:**

```
5, nums = [0,1,4,0,3,_,_,_]
```

**Explanation:**

```
Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## 📏 Constraints

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

## 🎯 Solution

### Approach 1: Two-Pointer 🚀

#### _Description:_

> Use two pointers to modify the array `nums` in place. `i` ttracks the current position for placing valid elements., and `j` iterates through the array to check each element.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let n = nums.length;
  let i = 0;
  let j = 0;
  while (j < n) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  return i;
};
```

##### C#

```csharp
public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int n = nums.Length;
        int i = 0;
        int j = 0;

        while (j < n) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
            j++;
        }
        return i;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: Single pass through the array.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: No additional space used.
