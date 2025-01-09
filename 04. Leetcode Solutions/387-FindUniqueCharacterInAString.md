# 💬 Problem 387: First Unique Character in a String

## 📝 Problem Statement

Given a string `s`, find the first non-repeating character in it and return its index. If it **does not** exist, return `-1`.

## 📚 Example 1

```
Input: s = "leetcode"
```

```
Output: 0
```

```
The character 'l' at index 0 is the first character that does not occur at any other index.
```

## 📚 Example 2

```
Input: s = "loveleetcode"
```

```
Output: 2
```

## 📚 Example 3

```
Input: s = "aabb"
```

```
Output: -1
```

## 📏 Constraints

- 1 <= s.length <= 10<sup>5</sup>
- `s`consists of only lowercase English letters

## 🎯 Solution

### Approach 1: Hash Map Count 🚀

#### _Description:_

> Use a hash map to count the frequency of each character, then find the first character with a frequency of 1.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const charCount = new Map();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
```

##### C#

```csharp
public class Solution {
    public int FirstUniqChar(string s) {
        Dictionary<char, int> charCount = new Dictionary<char, int>();

        foreach (char c in s) {
            if (!charCount.ContainsKey(c)) {
                charCount[c] = 0;
            }
            charCount[c]++;
        }

        for (int i = 0; i < s.Length; i++) {
            if (charCount[s[i]] == 1) {
                return i;
            }
        }

        return -1;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need two passes through the string - one to count frequencies and one to find the first unique character.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: The hash map will store at most 26 characters (lowercase English letters).

### Approach 2: Array Count (Optimized for lowercase letters) 🚀

#### _Description:_

> Since we know the input consists of only lowercase letters, we can use a fixed-size array of 26 elements instead of a hash map.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const count = new Array(26).fill(0);

  for (const char of s) {
    count[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - 97] === 1) {
      return i;
    }
  }

  return -1;
}
```

##### C#

```csharp
public class Solution {
    public int FirstUniqChar(string s) {
        int[] count = new int[26];

        foreach (char c in s) {
            count[c - 'a']++;
        }

        for (int i = 0; i < s.Length; i++) {
            if (count[s[i] - 'a'] == 1) {
                return i;
            }
        }

        return -1;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We still need two passes through the string.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We use a fixed-size array of 26 elements, regardless of input size.

