# 💬 Problem 217: Contains Duplicate

## 📝 Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

## 📚 Example 1

**Input:**

```
nums = [1,2,3,1]
```

**Output:**

```
true
```

**Explanation:**

```
The element 1 occurs at the indices 0 and 3.
```

## 📚 Example 2
**Input:**

```
nums = [1,2,3,4]
```

**Output:**

```
false
```

**Explanation:**

```
All elements are distinct.
```

## 📏 Constraints

- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

## 🎯 Solution

### Approach 1: Using HashSet/Set 🚀

#### _Description:_

> We can use a HashSet/Set to keep track of numbers we've seen. As we iterate through the array, we check if the current number is already in the set. If it is, we've found a duplicate. If not, we add it to the set. 

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
};
```

##### C#

```csharp
public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> seen = new HashSet<int>();

        foreach (int num in nums) {
            if (seen.Contains(num)) return true;
            seen.Add(num);
        }

        return false;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`,
  - **Explanation**: We only need to traverse the array once, where n is the length of the array.
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: In the worst case, we need to store all elements in the HashSet when there are no duplicates.

### Approach 2: Sorting 🚀

#### _Description:_

> Another approach is to sort the array first. After sorting, duplicate elements will be adjacent to each other. We can then check if any adjacent elements are equal.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  return false;
};
```

##### C#

```csharp
public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        Array.Sort(nums);

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i-1]) return true;
        }

        return false;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n log n)`,
  - **Explanation**: The sorting operation takes O(n log n) time, and the subsequent traversal takes O(n) time.
- **Space Complexity:**
  - **Value**: `O(1)` or `O(log n)`
  - **Explanation**: Space complexity depends on the sorting implementation. Some sorting algorithms like heapsort use O(1) space, while others like mergesort use O(log n) space.

### Approach 3: Using Object/Dictionary 🚀

#### _Description:_

> We can use an object/dictionary to keep count of each number. This approach is similar to using a Set but allows us to count occurrences if needed.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const count = {};

  for (const num of nums) {
    if (count[num]) return true;
    count[num] = 1;
  }

  return false;
};
```

##### C#

```csharp
public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        Dictionary<int, int> count = new Dictionary<int, int>();

        foreach (int num in nums) {
            if (count.ContainsKey(num)) return true;
            count[num] = 1;
        }

        return false;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`,
  - **Explanation**: We need to traverse the array once.
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: In the worst case, we need to store all elements in the dictionary.
