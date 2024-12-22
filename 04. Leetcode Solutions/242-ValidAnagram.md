# Problem 242: Valid Anagram

## Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

## Example 1

**Input:**

```
s = "anagram", t = "nagaram"
```

**Output:**

```
true
```

## Example 2

**Input:**

```
s = "rat", t = "car"
```

**Output:**

```
false
```

## Constraints

- 1 <= s.length, t.length <= 5 \* 10<sup>4</sup>
- `s` and `t` consist of lowercase English letters.

## Solution

### Approach 1: Sort and Compare

#### _Description:_

> First, check if the two strings have the same length. If they don't, they can't be anagrams, so return `false` immediately.
>
> If the lengths are the same, we proceed to sort both strings and compare each character at corresponding positions. If any character is different, the strings are not anagrams, and we return `false`. If all characters match, return `true`.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }

  return true;
};
```

##### C#

```csharp
public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;

        char[] sortedS = s.ToCharArray();
        char[] sortedT = t.ToCharArray();
        Array.Sort(sortedS);
        Array.Sort(sortedT);

        for (int i = 0; i < sortedS.Length; i++) {
            if (sortedS[i] != sortedT[i]) return false;
        }

        return true;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(nlogn)`,
  - **Explanation**: Sorting both arraysarrays requires `O(nlogn)`. The additional loop for comparison runs in `O(n)`, but it is dominated by the sorting step.
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: Space is required to store the sorted arrays of each string.

### Approach 2: Hashmap Comparison

#### _Description:_

> Create a hash map to store the frequency of characters.
>
> - For each character in string s, _increment_ its count in the map.
> - For each character in string t, _decrement_ its count in the map.
>
> After processing both strings, iterate through the map. If any character has a non-zero frequency, return `false` because the strings are not anagrams. If all frequencies are zero, return `true`.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }

    const hash = new Map();

    for (let i=0; i<s.length; i++){
        hash.set(s.charAt(i), (hash.get(s.charAt(i)) || 0) + 1);
        hash.set(t.charAt(i), (hash.get(t.charAt(i)) || 0) - 1);
    }

    for (let [key, value] of hash){
        if (value !== 0){
            return false;
        }
    }

    return true;
};
```

##### C#

```csharp
public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }

        var hash = new Dictionary<char, int>();

        for (int i = 0; i < s.Length; i++) {
            if (hash.ContainsKey(s[i])) {
                hash[s[i]]++;
            } else {
                hash[s[i]] = 1;
            }

            if (hash.ContainsKey(t[i])) {
                hash[t[i]]--;
            } else {
                hash[t[i]] = -1;
            }
        }

        foreach (var entry in hash) {
            if (entry.Value != 0) {
                return false;
            }
        }

        return true;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`,
  - **Explanation**: Both strings are iterated once to update the frequency map, and then we check all map entries, which takes linear time.
- **Space Complexity:**
  - **Value**: `O(n)`
  - **Explanation**: We use a hash map to store the frequency of characters for each string.

### Approach 3: Constant Space Array

#### _Description:_

> Create an array `freq` of size 26 to count the frequency of each character. The index of the array corresponds to each letter in the alphabet (`'a'` to `'z'`).
>
> - For each character in string `s`, *increment* the corresponding index in `freq`.
> - For each character in string `t`, *decrement* the corresponding index in `freq`.
>
> After processing both strings, check if all values in `freq` are zero. If any value is non-zero, return `false` because the strings are not anagrams. If all values are zero, return `true`.

#### _Implementation:_

##### JavaScript

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    const isValid = freq.every((num) => num === 0);

    return isValid;
};
```

##### C#

```csharp
public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }

        int[] freq = new int[26];

        for (int i = 0; i < s.Length; i++) {
            freq[s[i] - 'a']++;
            freq[t[i] - 'a']--;
        }

        foreach (var count in freq) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }
}
```

#### _Complexity Analysis_

- **Time Complexity:**
  - **Value**: `O(n)`,
  - **Explanation**: We iterate through both strings once, updating the frequency array. The final check through the array is constant time `O(1)` because the array size is fixed at 26.
- **Space Complexity:**
  - **Value**: `O(1)`
  - **Explanation**: The space used for the frequency array is constant (26 elements), regardless of the input size.


