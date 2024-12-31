# 💬 Problem 66: Plus One

## 📝 Problem Statement

You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

## 📚 Example 1

**Input:**

```
digits = [1,2,3]
```

**Output:**

```
[1,2,4]
```

**Explanation:**

```
The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

## 📚 Example 2

**Input:**

```
digits = [9]
```

**Output:**

```
[1,0]
```

**Explanation:**

```
The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

## 📏 Constraints

- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9
- `digits` does not contain any leading 0's

## 🎯 Solution

### Approach 1: Right-to-Left Iteration 🚀

#### _Description:_

> This approach involves iterating through the array from right to left, simulating the process of adding 1 to a number. We keep track of the carry and modify digits in place.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
```

##### C#

```csharp
public class Solution {
    public int[] PlusOne(int[] digits) {
        for(int i = digits.Length - 1; i >= 0; i--) {
            if(digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }

        int[] result = new int[digits.Length + 1];
        result[0] = 1;
        return result;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`,
  - **Explanation**: In the worst case (when all digits are 9), we need to traverse the entire array once.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We are modifying the array in-place. Only in the case of all 9's do we create a new array.
