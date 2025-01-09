# 💬 Problem 350: Intersection of Two Arrays II

## 📝 Problem Statement

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

## 📚 Example 1

**Input:**
```
nums1 = [1,2,2,1], nums2 = [2,2]
```

**Output:**
```
[2,2]
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
[9,4] is also accepted.
```

## 📏 Constraints

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

## 🎯 Solution

### Approach 1: Hash Map 🚀

#### _Description:_

> Use a hash map to count the frequency of elements in the first array, then check each element in the second array against the hash map to build the intersection.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const map = new Map();
  const result = [];

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
}
```

##### C#

```csharp
public class Solution {
    public int[] Intersect(int[] nums1, int[] nums2) {
        Dictionary<int, int> map = new Dictionary<int, int>();
        List<int> result = new List<int>();

        foreach (int num in nums1) {
            if (!map.ContainsKey(num)) {
                map[num] = 0;
            }
            map[num]++;
        }

        foreach (int num in nums2) {
            if (map.ContainsKey(num) && map[num] > 0) {
                result.Add(num);
                map[num]--;
            }
        }

        return result.ToArray();
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n + m)`
  - **Explanation**: Where n and m are the lengths of nums1 and nums2 respectively. We need to traverse both arrays once.
- **Space Complexity:**
  - **Value**: `O(min(n, m))`
  - **Explanation**: We store the smaller array in the hash map to optimize space usage.

### Approach 2: Sorting and Two Pointers 🚀

#### _Description:_

> Sort both arrays first, then use two pointers to find matching elements. This approach is more efficient when the arrays are already sorted.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
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
      result.push(nums1[i]);
      i++;
      j++;
    }
  }

  return result;
}
```

##### C#

```csharp
public class Solution {
    public int[] Intersect(int[] nums1, int[] nums2) {
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
                result.Add(nums1[i]);
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
  - **Value**: `O(n log n + m log m)`
  - **Explanation**: Due to the sorting of both arrays, where n and m are the lengths of nums1 and nums2 respectively.
- **Space Complexity:**
  - **Value**: `O(1)` or `O(n)`
  - **Explanation**: O(1) if we don't count the space used for the output array. The space complexity of the sorting algorithm depends on the implementation.

### Follow-up Questions:

1. What if the given array is already sorted? How would you optimize your solution?

   - If arrays are sorted, use Approach 2 (Two Pointers) directly without sorting, reducing time complexity to O(n).

2. What if `nums1`'s size is small compared to `nums2`'s size? Which algorithm is better?

   - Use the Hash Map approach (Approach 1) with nums1 as the array to build the hash map to minimize space usage.

3. What if elements of `nums2` are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
   - If nums1 fits into memory, use external sort on nums2 and then use the two-pointer approach.
   - If neither fits into memory, external sort both arrays first, then use two pointers with block-by-block processing.
