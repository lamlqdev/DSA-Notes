# 💬 Problem 9: Palindrome Number

## 📝 Problem Statement 
Given an integer `x`, return `true` if `x` is a 
***palindrome***, and `false` otherwise.

> ***Note***: An integer is a ***palindrome*** when it reads the same forward and backward.
>
> For example, 121 is a palindrome while 123 is not.
## 📚 Example 1 

**Input:**
```
x = 121
```

**Output:**
```
true
```

**Explanation:**
```
121 reads as 121 from left to right and from right to left
```
## 📚 Example 2

**Input:**
```
x = -121
```

**Output:**
```
false
```

**Explanation:**
```
From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome
```
## 📚 Example 3

**Input:**
```
x = 10
```

**Output:**
```
false
```

**Explanation:**
```
Reads 01 from right to left. Therefore it is not a palindrome
```

## 📏 Constraints
 - -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1

## 🎯 Solution

### Approach 1: Use String

#### *Description:*
>
> This approach involves converting the input number to a string and then reversing the string to check if the original string and the reversed string are the same.
>
#### *Implementation:*
##### JavaScript
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString();
  const reversedStr = str.split('').reverse().join('');
    
  return str === reversedStr;
};

```

##### C#
```csharp
using System.Linq
public bool IsPalindrome(int x) {
  string str = x.ToString();
  string reversedStr = new string(str.Reverse().ToArray());

  return str == reversedStr;
}
```

#### *Complexity Analysis*
- **Time Complexity:** 
  - **Value**: `O(n)`, 
  - **Explanation**: `n` is the number of digits in the input number. This is because converting the number to a string, reversing the string, and comparing the strings all take linear time.
- **Space Complexity:** 
  - **Value**: `O(n)`
  - **Explanation**: `n` is the number of digits in the input number. This is due to the space required to store the string representation of the number and its reversed version

### Approach 2: Reverse and Compare 

#### *Description:*
>
> This approach determines whether an integer is a palindrome by reversing the digits of the integer and comparing it with the original value, following this process: 
> 1. **Handle Negative Cases:** Immediately return `false` for negative numbers since they cannot be palindromes.
> 2. **Single-Digit Optimization**: Return `true` for numbers less than 10, as all single-digit numbers are palindromes.
> 3. **Reverse the Number:** 
>   - Use a while loop to extract digits from the input number by repeatedly taking the modulus (`x % 10`) and appending it to a reversed integer (`palindrome`).
>   - Remove the last digit of the number by dividing it by 10 (`x /= 10`).
> 4. **Compare:** Check if the reversed number (`palindrome`) matches the original input (`original`)
#### *Implementation:*
##### JavaScript
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false; 
  if (x < 10) return true; 

  let palindrome = 0;
  let original = x;

  while (x > 0) {
    palindrome = palindrome * 10 + (x % 10); 
    x = Math.floor(x / 10); 
  }

  return palindrome === original;
};

```

##### C#
```csharp
public bool IsPalindrome(int x) {
  if (x < 0) return false;
  if (x < 10) return true;

  int palindrome = 0, original = x;
  while (x > 0) 
  {
    palindrome *= 10;
    palindrome += (x % 10);
    x /= 10;
  }

  return palindrome == original;
}
```

#### *Complexity Analysis*
- **Time Complexity:** 
  - **Value**: `O(log10(n))`, 
  - **Explanation**: The `while` loop processes each digit of the number `n` by repeatedly dividing it by 10. The number of digits in n is proportional to `log10(n)`, so the loop runs `O(log10(n))` times. Each iteration performs constant-time operations such as multiplication, addition, and modulo
- **Space Complexity:** 
  - **Value**: `O(1)`
  - **Explanation**: The algorithm uses a fixed amount of space for integer variables (`palindrome`, `original`, `n`) to store intermediate values. No additional data structures are utilized, so the space complexity remains constant



### Approach 3: Reverse-Half and Compare (🚀)

#### *Description:*
>
> This approach determines whether an integer is a palindrome by reversing the digits of the integer (but only a second half) and comparing it with the first half, following this process: 
> 1. **Handle Negative Cases:** Immediately return `false` for ***negative numbers*** and ***numbers end with 0 except for 0*** since they cannot be palindromes.
> 2. **Single-Digit Optimization**: Return `true` for numbers less than 10, as all single-digit numbers are palindromes.
> 3. **Reverse the Number:** 
>   - Use a loop to build the reversed second half of the number
>   - Stop when the reversed half is greater than or equal to the remaining half.
> 4. **Compare:** Check if the two halves are equal or if removing the middle digit (for odd-length numbers) makes them equal.
#### *Implementation:*
##### JavaScript
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  if (x < 10) return true;

  let palindrome = 0;
  while (x > palindrome) {
    palindrome = palindrome * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return palindrome === x || Math.floor(palindrome / 10) === x;
};

```

##### C#
```csharp
public bool IsPalindrome(int x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  if (x < 10) return true;

  int palindrome = 0;
  while (x > palindrome) 
  {
    palindrome *= 10;
    palindrome += (x % 10);
    x /= 10;
  }

  return (palindrome == x || palindrome / 10 == x);
}
```

#### *Complexity Analysis*
- **Time Complexity:** 
  - **Value**: `O(log10(n))`, 
  - **Explanation**: The algorithm divides the input number `n` by 10 in each iteration of the `while` loop. This continues until `n` becomes less than or equal to `palindrome`, which takes approximately `log10(n)` iterations, where `log10(n)` is the number of digits in `n`
- **Space Complexity:** 
  - **Value**: `O(1)`
  - **Explanation**: The algorithm uses a constant amount of extra space. Variable likes `palindrome` do not grow with the size of the input `n`. No additional data structures are used.


