# 💬 Problem 35: Search Insert Position

## 📝 Problem Statement

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

## 📚 Example 1

**Input:**

```
nums = [1,3,5,6], target = 5
```

**Output:**

```
2
```

## 📚 Example 2

**Input:**

```
nums = [1,3,5,6], target = 2
```

**Output:**

```
1
```

## 📚 Example 3

**Input:**

```
nums = [1,3,5,6], target = 7
```

**Output:**

```
4
```

## 📏 Constraints

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- nums contains **distinct** values sorted in **ascending** order.
- -10<sup>4</sup> <= target <= 10<sup>4</sup>

## 🎯 Solution

### Approach 1: Binary Search 🚀

#### _Description:_

> This approach uses the binary search algorithm to search for the target in the sorted array `nums`. If the target exists, its index is returned.
>
> If the target is not found, the loop ends, meaning the search range has been fully explored. At this point, `left` represents the smallest index where the target can be inserted to maintain the sorted order, as all elements before `left` are smaller than the target.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
```

##### C#

```csharp
public int SearchInsert(int[] nums, int target) {
    int left = 0, right = nums.Length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(logn)`,
  - **Explanation**: Use binary search algorithm, resulting in logarithmic time complexity relative to the size of the input array.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: The algorithm operates in constant space, using only a fixed number of variables regardless of the input size.
