# 💬 Problem 414: Third Maximum Number

## 📝 Problem Statement

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

## 📚 Example 1

**Input:**

```
nums = [3,2,1]
```

**Output:**

```
1
```

**Explanation:**

```
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
```

## 📚 Example 2

**Input:**

```
nums = [1,2]
```

**Output:**

```
2
```

**Explanation:**

```
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
```

## 📚 Example 3

**Input:**

```
nums = [2,2,3,1]
```

**Output:**

```
1
```

**Explanation:**

```
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
```

## 📏 Constraints
- 1 <= nums.length <= 10<sup>4</sup>
- -2 <sup>31</sup> <= nums[i] <= 2 <sup>31</sup> - 1


## 🎯 Solution

### Approach 1: Using Set and Sorting

#### _Description:_

> This approach removes duplicates using a set and sorts the unique numbers in descending order.
>
> - If the array contains at least three distinct numbers, return the third largest.
> - Otherwise, return the largest number.
>
> ***Note**: Sorting the array is not the most efficient way to solve this problem.*

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let uniqueNums = [...new Set(nums)];
  uniqueNums.sort((a, b) => b - a);

  if (uniqueNums.length < 3) {
    return uniqueNums[0];
  }
  return uniqueNums[2];
};
```

##### C#

```csharp
public class Solution {
    public int ThirdMax(int[] nums) {
        var uniqueNums = nums.Distinct().ToList();
        uniqueNums.Sort((a, b) => b - a);

        return uniqueNums.Count < 3 ? uniqueNums[0] : uniqueNums[2];
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(nlogn)`,
  - **Explanation**: Removing duplicates takes
    `O(n)`, and sorting takes `O(nlogn)`.
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: A new array is created to store unique numbers.

### Approach 2: Single Pass with Three Variables

#### _Description:_

> This approach uses three variables (`first`, `second`, `third`) to track the three largest unique numbers in the array.
>
> - Traverse the array once.
> - Update the variables when encountering a number greater than the current maximums.
> - Return the third maximum if it exists; otherwise, return the overall maximum.
>
> ***Note**: This approach avoids sorting and minimizes space usage.*

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (const num of nums) {
    if (num === first || num === second || num === third) {
      continue;
    }
    if (num > first) {
      [first, second, third] = [num, first, second];
    } else if (num > second) {
      [second, third] = [num, second];
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
};
```

##### C#

```csharp
public class Solution {
    public int ThirdMax(int[] nums) {
        long first = long.MinValue, second = long.MinValue, third = long.MinValue;

        foreach (int num in nums) {
            if (num == first || num == second || num == third) continue;

            if (num > first) {
                third = second;
                second = first;
                first = num;
            } else if (num > second) {
                third = second;
                second = num;
            } else if (num > third) {
                third = num;
            }
        }

        return third == long.MinValue ? (int)first : (int)third;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`,
  - **Explanation**: The array is traversed once, and updates are constant-time operations.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: Only three variables are used regardless of the input size.
