# Problem 1: Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.
You may assume that each input would have ***exactly one solution***, and you may not use the *same element twice*.
You can return the answer in any order.

## Example

**Input:**
```
nums = [2, 7, 11, 15], target = 9
```

**Output:**
```
[0, 1]
```

**Explanation:**
```
Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Solution

### Approach 1: Brute Force

#### *Description:*
> The brute force approach involves ***checking all possible pairs of numbers*** in the array to see if they add up to the target sum. This method uses ***two nested loops*** to iterate through the array and check each pair.

#### *Implementation:*
##### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
```

##### C#

```csharp
public int[] TwoSum(int[] nums, int target) {
    for (int i = 0; i < nums.Length; i++) {
        for (int j = i + 1; j < nums.Length; j++) {
            if (nums[i] + nums[j] == target) {
                return new int[] { i, j };
            }
        }
    }
    return new int[] { };
}
```

#### *Complexity Analysis*
- **Time Complexity:** 
  - **Value**: `O(n^2)`, 
  - **Explanation**: We have two nested loops, each running up to `n` times, where `n` is the number of elements in the array.
- **Space Complexity:** 
  - **Value**: `O(1)`
  - **Explanation**: We are not using any extra space that scales with the input size, only a few variables for indices and the result.

### Approach 2: One-Pass Hash Table

#### *Description:*

> The one-pass hash table approach involves:
> - Iterating through the array while maintaining a hash table to store the numbers we have seen so far and their indices
> - For each number, we check if the complement (target - current number) exists in the hash table
> - If it does, we have found the solution.

#### *Implementation:*
##### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```

##### C#
```csharp
public int[] TwoSum(int[] nums, int target) {
    Dictionary<int, int> map = new Dictionary<int, int>();
    for (int i = 0; i < nums.Length; i++) {
        int complement = target - nums[i];
        if (map.ContainsKey(complement)) {
            return new int[] { map[complement], i };
        }
        map[nums[i]] = i;
    }
    return new int[] { };
}
```

#### *Complexity Analysis*
- **Time Complexity:** 
  - **Value**: `O(n)`, 
  - **Explanation**: We traverse the list containing n elements only once. Each lookup in the hash table costs `O(1)` time. 
- **Space Complexity:** 
  - **Value**: `O(n)`
  - **Explanation**: The extra space required depends on the number of items stored in the hash table, which stores at most n elements.