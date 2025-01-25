# 💬 Problem 58: Length of Last Word

## 📝 Problem Statement

Given a string `s` consisting of words and spaces, return _the length of the last word in the string_.

A **word** is a maximal substring consisting of non-space characters only.

## 📚 Example

**Example 1:**

**Input:**

```
s = "Hello World"
```

**Output:**

```
5
```

**Explanation:**

```
The last word is "World" with length 5.
```

**Example 2:**

**Input:**

```
s = "   fly me   to   the moon  "
```

**Output:**

```
4
```

**Explanation:**

```
The last word is "moon" with length 4.
```

## 📏 Constraints

- 1 <= s.length <= 10<sup>4</sup>
- `s` consists of only English letters and spaces ' '
- There will be at least one word in `s`

## 🎯 Solution

### Approach 1: Trim and Split

#### _Description:_

> Trim trailing spaces and split the string into words. Then return the length of the last word.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
}
```

##### C#

```csharp
public class Solution {
    public int LengthOfLastWord(string s) {
        string[] words = s.Trim().Split(' ');
        return words[words.Length - 1].Length;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: Where n is the length of the string. We need to traverse the string once to trim and split.
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We need to store the split words in an array.

### Approach 2: Traverse from End 🚀

#### _Description:_

> Traverse the string from end to start, counting non-space characters until we hit a space after seeing some non-space characters.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}
```

##### C#

```csharp
public class Solution {
    public int LengthOfLastWord(string s) {
        int length = 0;
        int i = s.Length - 1;

        while (i >= 0 && s[i] == ' ') {
            i--;
        }

        while (i >= 0 && s[i] != ' ') {
            length++;
            i--;
        }

        return length;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We may need to traverse the string once from end to start.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: We only use a constant amount of extra space regardless of input size.
