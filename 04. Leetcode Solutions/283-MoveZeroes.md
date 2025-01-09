# 💬 Problem 283: Move Zeroes

## 📝 Problem Statement

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this **in-place** without making a copy of the array.

## 📚 Example 1

**Input:**

```
nums = [0,1,0,3,12]
```

**Output:**

```
[1,3,12,0,0]
```

## 📚 Example 2

**Input:**

```
nums = [0]
```

**Output:**

```
[0]
```

## 📏 Constraints

- 1 <= nums.length <= 10<sup>4</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1

## 🎯 Solution

### Approach 1: Two Pointers 🚀

#### _Description:_

> Use two pointers: one to iterate through the array and another to keep track of where the next non-zero element should be placed. This approach ensures we maintain the relative order of non-zero elements while moving zeros to the end.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
}
```

##### C#

```csharp
public void MoveZeroes(int[] nums) {
    int nonZeroIndex = 0;

    for (int i = 0; i < nums.Length; i++) {
        if (nums[i] != 0) {
            int temp = nums[nonZeroIndex];
            nums[nonZeroIndex] = nums[i];
            nums[i] = temp;
            nonZeroIndex++;
        }
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We only need to traverse the array once, where n is the length of the array.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We are modifying the array in-place and only using a constant amount of extra space.

### Approach 2: Two-Pass Solution 🚀

#### _Description:_

> This approach uses two passes through the array:
>
> 1. First pass to copy all non-zero elements to the front
> 2. Second pass to fill the remaining positions with zeros

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
}
```

##### C#

```csharp
public void MoveZeroes(int[] nums) {
    int pos = 0;

    for (int i = 0; i < nums.Length; i++) {
        if (nums[i] != 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }

    for (int i = pos; i < nums.Length; i++) {
        nums[i] = 0;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We make two passes through the array, but this is still linear time.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We modify the array in-place without using any extra space that scales with input size.
