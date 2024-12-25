# 💬 Problem 26: Remove Duplicates from Sorted Array

## 📝 Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once. The **relative order **of the elements should be kept the **same**. Then return the number of unique elements in `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in nums initially. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

## 📚 Example 1

**Input:**

```
nums = [1,1,2]
```

**Output:**

```
2, nums = [1,2,_]
```

**Explanation:**

```
Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## 📚 Example 2

**Input:**

```
nums = [0,0,1,1,1,2,2,3,3,4]
```

**Output:**

```
5, nums = [0,1,2,3,4,_,_,_,_,_]
```

**Explanation:**

```
Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## 📏 Constraints

- 1 <= nums.length <= 3 \* 10<sup>4</sup>
- -100 <= nums[i] <= 100
- `nums` is sorted in **non-decreasing order.**

## 🎯 Solution

### Approach 1: Brute Force

#### _Description:_

> Iterate through the array `nums` and copy unique elements to a new array. Then, overwrite the original array `nums` with the unique elements.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const unique = [];
  for (let i = 0; i < nums.length; i++) {
    if (!unique.includes(nums[i])) {
      unique.push(nums[i]);
    }
  }
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  return unique.length;
};
```

##### C#

```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        List<int> unique = new List<int>();
        for (int i = 0; i < nums.Length; i++) {
            if (!unique.Contains(nums[i])) {
                unique.Add(nums[i]);
            }
        }
        for (int i = 0; i < unique.Count; i++) {
            nums[i] = unique[i];
        }
        return unique.Count;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n^2)`
  - **Explanation**: `O(n)` for iterating through `nums` multiplied by `O(n)` for checking if element exists in `nums`
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: Space is used for the auxiliary array `unique`.

### Approach 2: Two Pointers 🚀

#### _Description:_

> Use two pointers to modify the array `nums` in place. `i` tracks the position of the next unique element, and `j` scans the array for new unique elements.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
```

##### C#

```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length == 0) return 0;

        int i = 0;
        for (int j = 1; j < nums.Length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
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

### Approach 3: Optimized Two Pointers (Early Termination) 🚀

#### _Description:_

> Same as the two-pointer approach, but with an early termination condition. If all duplicates are removed before reaching the end of the array, stop processing.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
    if (j - i > nums.length - i - 1) break; // Early termination
  }
  return i + 1;
};
```

##### C#

```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length == 0) return 0;

        int i = 0;
        for (int j = 1; j < nums.Length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
            if (j - i > nums.Length - i - 1) break; // Early termination
        }
        return i + 1;
    }
}

```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: But often slightly better due to early termination
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: No additional space used.
