# 💬 Problem 349: Intersection of Two Arrays

## 📝 Problem Statement

Given two integer arrays `nums1` and `nums2`, return an array of their **intersection**. Each element in the result must be **unique** and you may return the result in any order.

## 📚 Example 1

**Input:**

```
nums1 = [1,2,2,1], nums2 = [2,2]
```

**Output:**

```
[2]
```

**Explanation:**

```
The only common element between nums1 and nums2 is 2, and it should appear only once in the result.
```

## 📚 Example 2

**Input:**

```
nums1 = [4,9,5], nums2 = [9,4,9,8,4]
```

**Output:**

```
[4,9]
```

**Explanation:**

```
[9,4] is also accepted as a valid answer since the order doesn't matter.
```

## 📏 Constraints

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

## 🎯 Solution

### Approach 1: Using Set 🚀

#### _Description:_

> This approach uses Set data structure to remove duplicates and find common elements efficiently. We first convert nums1 to a Set to remove duplicates, then filter nums2 to find elements that exist in the Set of nums1. Finally, we convert the result to a Set again to remove any remaining duplicates.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  return [...new Set(nums2.filter((num) => set1.has(num)))];
};
```

##### C#

```csharp
public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        HashSet<int> set1 = new HashSet<int>(nums1);
        HashSet<int> resultSet = new HashSet<int>();

        foreach(int num in nums2) {
            if(set1.Contains(num)) {
                resultSet.Add(num);
            }
        }

        return resultSet.ToArray();
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n + m)`,
  - **Explanation**: Where n and m are the lengths of nums1 and nums2 respectively. We need to iterate through both arrays once.
- **Space Complexity:**
  - **Value**: `O(min(n, m))`
  - **Explanation**: In the worst case, we need to store all unique elements from the smaller array.

### Approach 2: Two Pointers with Sorting

#### _Description:_

> This approach first sorts both arrays and then uses two pointers to find common elements. While it's not as efficient as the Set approach for most cases, it uses less space.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const result = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
        result.push(nums1[i]);
      }
      i++;
      j++;
    }
  }

  return result;
};
```

##### C#

```csharp
public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        Array.Sort(nums1);
        Array.Sort(nums2);

        List<int> result = new List<int>();
        int i = 0, j = 0;

        while (i < nums1.Length && j < nums2.Length) {
            if (nums1[i] < nums2[j]) {
                i++;
            } else if (nums1[i] > nums2[j]) {
                j++;
            } else {
                if (result.Count == 0 || result[result.Count - 1] != nums1[i]) {
                    result.Add(nums1[i]);
                }
                i++;
                j++;
            }
        }

        return result.ToArray();
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n log n + m log m)`,
  - **Explanation**: Due to sorting of both arrays, where n and m are the lengths of nums1 and nums2 respectively.
- **Space Complexity:**
  - **Value**: `O(min(n, m))`
  - **Explanation**: In the worst case, we need to store all unique elements from the smaller array.

### Approach 3: Binary Search 🚀

#### _Description:_

> This approach sorts one array and performs binary search for each element of the other array. This can be more efficient when one array is significantly smaller than the other.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return true;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return false;
  };

  nums2.sort((a, b) => a - b);
  return [...new Set(nums1.filter((num) => binarySearch(nums2, num)))];
};
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n log m)`,
  - **Explanation**: Where n is the length of nums1 and m is the length of nums2. We perform binary search (log m) for each element in nums1 (n times).
- **Space Complexity:**
  - **Value**: `O(min(n, m))`
  - **Explanation**: In the worst case, we need to store all unique elements from the smaller array.
