# 💬 Problem 448: Find All Numbers Disappeared in an Array

## 📝 Problem Statement

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.

## 📚 Example 1

**Input:**

```
nums = [4,3,2,7,8,2,3,1]
```

**Output:**

```
[5,6]
```

**Explanation:**

```
5 and 6 are the numbers that do not appear in the array.
```

## 📚 Example 2

**Input:**

```
nums = [1,1]
```

**Output:**

```
[2]
```

**Explanation:**

```
2 is the only number that does not appear in the array.
```

## 📏 Constraints

- n == nums.length
- 1 <= n <= 10<sup>5</sup>
- 1 <= nums[i] <= n

## 🎯 Solution

### Approach 1: Using Set

#### _Description:_

> Create a set of numbers from 1 to n and remove numbers that appear in nums.
> The remaining numbers in the set are the missing numbers.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const numSet = new Set(nums);
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }

  return result;
};
```

##### C#

```csharp
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        var n = nums.Length;
        var numSet = new HashSet<int>(nums);
        var result = new List<int>();

        for (int i = 1; i <= n; i++) {
            if (!numSet.Contains(i)) {
                result.Add(i);
            }
        }

        return result;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need to iterate through the array once to create the set and once to find missing numbers
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need extra space to store the set of numbers

### Approach 2: Using Counting Array

#### _Description:_

> This approach uses an additional array to count the frequency of each number:
>
> 1. Create a counting array of size n to store the frequency of each number
> 2. Count the frequency of each number in the input array
> 3. Check which numbers (1 to n) have frequency of 0 - these are the missing numbers
>
> While this approach is intuitive and easy to understand, it uses O(n) extra space.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const count = new Array(n + 1).fill(0);
  const result = [];

  for (const num of nums) {
    count[num]++;
  }

  for (let i = 1; i <= n; i++) {
    if (count[i] === 0) {
      result.push(i);
    }
  }

  return result;
};
```

##### C#

```csharp
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        int n = nums.Length;
        int[] count = new int[n + 1];
        var result = new List<int>();

        foreach (int num in nums) {
            count[num]++;
        }

        for (int i = 1; i <= n; i++) {
            if (count[i] == 0) {
                result.Add(i);
            }
        }

        return result;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need to iterate through the array twice - once for counting and once for finding missing numbers
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need an additional array of size n+1 to store the frequency count

### Approach 3: In-place Modification 🚀

#### _Description:_

> This approach uses the array indices to mark presence of numbers. Here's how it works:
>
> 1. For each number n in the array, we mark the number at index (n-1) as negative
>
>    - For example, if we see number 4, we make the number at index 3 negative
>    - We use Math.Abs() when accessing numbers because they might have been marked negative already
>
> 2. After marking, the array will have these properties:
>    - If index i has a negative number: (i+1) exists in the original array
>    - If index i has a positive number: (i+1) is missing from the original array

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};
```

##### C#

```csharp
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        for (int i = 0; i < nums.Length; i++) {
            int index = Math.Abs(nums[i]) - 1;
            nums[index] = -Math.Abs(nums[index]);
        }

        var result = new List<int>();
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] > 0) {
                result.Add(i + 1);
            }
        }

        return result;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need to iterate through the array twice
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We modify the input array in-place and only use constant extra space
