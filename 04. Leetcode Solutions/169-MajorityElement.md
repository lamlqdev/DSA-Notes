# 💬 Problem 169: Majority Element

## 📝 Problem Statement

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

## 📚 Example 1

**Input:**

```
nums = [3,2,3]
```

**Output:**

```
3
```

## 📚 Example 2

**Input:**

```
nums = [2,2,1,1,1,2,2]
```

**Output:**

```
2
```

## 📏 Constraints

- n == nums.length
- 1 <= n <= 5 \* 10<sup>4</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

## 🎯 Solution

### Approach 1: Boyer-Moore Voting Algorithm 🚀

#### _Description:_

> The Boyer-Moore voting algorithm works by maintaining a count and a candidate. When we find a number equal to the candidate, we increment count; otherwise, we decrement it. When count reaches 0, we choose a new candidate.
>
> This works because the majority element appears more than n/2 times, so it will always survive the "voting" process.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};
```

##### C#

```csharp
public class Solution {
    public int MajorityElement(int[] nums) {
        int count = 0;
        int candidate = 0;

        foreach (int num in nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }

        return candidate;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We only need to iterate through the array once.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use two variables regardless of input size.

### Approach 2: Sorting Method

#### _Description:_

> Since the majority element appears more than n/2 times, after sorting the array, the middle element will always be the majority element.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
```

##### C#

```csharp
public class Solution {
    public int MajorityElement(int[] nums) {
        Array.Sort(nums);
        return nums[nums.Length/2];
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n log n)`
  - **Explanation**: Sorting the array takes O(n log n) time.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We sort the array in-place.

### Approach 3: HashMap Counting

#### _Description:_

> Count the frequency of each element using a hash map. The element with frequency greater than n/2 is the majority element.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const n = nums.length;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > n / 2) return num;
  }

  return nums[0]; // This line will never be reached given problem constraints
};
```

##### C#

```csharp
public class Solution {
    public int MajorityElement(int[] nums) {
        Dictionary<int, int> count = new Dictionary<int, int>();
        int n = nums.Length;

        foreach (int num in nums) {
            if (!count.ContainsKey(num)) {
                count[num] = 0;
            }
            count[num]++;
            if (count[num] > n/2) return num;
        }

        return nums[0]; // This line will never be reached given problem constraints
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need to traverse the array once to count frequencies.
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: In worst case, we might need to store n/2 different elements in the hash map.
