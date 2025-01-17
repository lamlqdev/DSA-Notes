# 💬 Problem 11: Container With Most Water

## 📝 Problem Statement

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

**Notice** that you may not slant the container.

## 📚 Example 1

**Input:**

```
height = [1,8,6,2,5,4,8,3,7]
```

**Output:**

```
49
```

**Explanation:**

```
The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
The optimal container is formed by lines at index 1 and index 8 with heights 8 and 7, giving an area of min(8,7) * (8-1) = 7 * 7 = 49.
```

## 📚 Example 2

**Input:**

```
height = [1,1]
```

**Output:**

```
1
```

## 📏 Constraints

- n == height.length
- 2 <= n <= 10<sup>5</sup>
- 0 <= height[i] <= 10<sup>4</sup>

## 🎯 Solution

### Approach 1: Two Pointers 🚀

#### _Description:_

> Use two pointers starting from both ends of the array. Move the pointer with smaller height inward since moving the larger height pointer would only decrease the area.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const area = width * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
```

##### C#

```csharp
public class Solution {
    public int MaxArea(int[] height) {
        int left = 0;
        int right = height.Length - 1;
        int maxArea = 0;

        while (left < right) {
            int width = right - left;
            int area = width * Math.Min(height[left], height[right]);
            maxArea = Math.Max(maxArea, area);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We traverse the array once with two pointers moving towards each other.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a constant amount of extra space.

### Approach 2: Optimized Two Pointers with Skip 🚀

#### _Description:_

> Similar to Approach 1, but we can skip some iterations by moving the pointer past any shorter lines, as they cannot produce a larger area.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, h * (right - left));

    // Skip lines shorter than current height
    while (left < right && height[left] <= h) left++;
    while (left < right && height[right] <= h) right--;
  }

  return maxArea;
}
```

##### C#

```csharp
public class Solution {
    public int MaxArea(int[] height) {
        int left = 0;
        int right = height.Length - 1;
        int maxArea = 0;

        while (left < right) {
            int h = Math.Min(height[left], height[right]);
            maxArea = Math.Max(maxArea, h * (right - left));

            // Skip lines shorter than current height
            while (left < right && height[left] <= h) left++;
            while (left < right && height[right] <= h) right--;
        }

        return maxArea;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: Although we have nested while loops, each element is visited at most once.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a constant amount of extra space.
