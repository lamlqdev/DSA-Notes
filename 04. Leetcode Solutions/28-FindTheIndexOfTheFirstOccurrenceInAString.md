# 💬 Problem 28: Find the Index of the First Occurrence in a String

## 📝 Problem Statement

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

## 📚 Example 1

**Input:**

```
haystack = "sadbutsad"
needle = "sad"
```

**Output:**

```
0
```

**Explanation:**

```
"sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

## 📚 Example 2

**Input:**

```
haystack = "leetcode"
needle = "leeto"
```

**Output:**

```
-1
```

**Explanation:**

```
"leeto" did not occur in "leetcode", so we return -1.
```

## 📏 Constraints

- 1 <= haystack.length, needle.length <= 10<sup>4</sup>
- `haystack` and `needle` consist of only lowercase English characters

## 🎯 Solution

### Approach 1: Sliding Window

#### _Description:_

> This approach uses a simple sliding window technique to check each possible substring of length equal to needle's length in the haystack string. We compare each substring with the needle string to find a match.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
```

##### C#

```csharp
public class Solution {
    public int StrStr(string haystack, string needle) {
        if (needle.Length > haystack.Length) return -1;

        for (int i = 0; i <= haystack.Length - needle.Length; i++) {
            if (haystack.Substring(i, needle.Length) == needle) {
                return i;
            }
        }

        return -1;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n * m)`,
  - **Explanation**: where `n` is the length of haystack and `m` is the length of needle. In worst case, we need to check every position and compare m characters for each position.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use constant extra space.

### Approach 2: Built-in Method 🚀

#### _Description:_

> Most programming languages provide built-in methods for string searching that are highly optimized. While it's important to understand the algorithms, in practice, using these built-in methods is often the most efficient solution.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
```

##### C#

```csharp
public class Solution {
    public int StrStr(string haystack, string needle) {
        return haystack.IndexOf(needle);
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`,
  - **Explanation**: Most modern implementations use highly optimized algorithms internally.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: Built-in methods typically use constant extra space.
