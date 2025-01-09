# 💬 Problem 268: Missing Number

## 📝 Problem Statement

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

## 📚 Example 1

**Input:**

```
nums = [3,0,1]
```

**Output:**

```
2
```

**Explanation:**

```
n = 3 since there are 3 numbers
The numbers in range [0,3] are: 0,1,2,3
The missing number is 2
```

## 📚 Example 2

**Input:**

```
nums = [0,1]
```

**Output:**

```
2
```

**Explanation:**

```
n = 2 since there are 2 numbers
The numbers in range [0,2] are: 0,1,2
The missing number is 2
```

## 📏 Constraints

- n == nums.length
- 1 <= n <= 10<sup>4</sup>
- 0 <= nums[i] <= n
- All the numbers in `nums` are **unique**

## 🎯 Solution

### Approach 1: Using Sum 🚀

#### _Description:_

> The idea is to calculate the sum of numbers from 0 to n and subtract the sum of numbers in the array.
> The difference will be the missing number.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};
```

##### C#

```csharp
public class Solution {
    public int MissingNumber(int[] nums) {
        int n = nums.Length;
        int expectedSum = (n * (n + 1)) / 2;
        int actualSum = nums.Sum();
        return expectedSum - actualSum;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We only need to iterate through the array once to calculate the sum
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: Only using constant extra space

### Approach 2: Using XOR 🚀

#### _Description:_

> Using XOR properties:
> - a XOR a = 0
> - a XOR 0 = a
> - XOR is commutative and associative
>   XOR all numbers from 0 to n with all numbers in array, the result is the missing number

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    result ^= i ^ nums[i];
  }
  return result;
};
```

##### C#

```csharp
public class Solution {
    public int MissingNumber(int[] nums) {
        int result = nums.Length;
        for(int i = 0; i < nums.Length; i++) {
            result ^= i ^ nums[i];
        }
        return result;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need to iterate through the array once
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: Only using a single variable to store result
