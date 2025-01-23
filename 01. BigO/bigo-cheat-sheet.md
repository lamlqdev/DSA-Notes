# 📒 Big O Cheat Sheet 

## 🎯 Big Os

**O(1)**: Constants - no loop

**O(LogN)**: Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)

**O(n)**: Linear - for loops, while loops through n items

**O(nlog(n)**) Log Liniear - usually sorting operations

**O(n<sup>2</sup>)** Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops

**O(2<sup>n</sup>)** Exponential - recursive algorithms that solves a problem of size N

**O(n!)** Factorial - you are adding a loop for every elemeny

> Iterating through half a collection is still **O(n)** \
> Two separate collections: **O(a * b)**

## ❓ What Can Cause Time In A Function

- Operations (+, -, *, /) \
- Comparisons (<, >, ==) \
- Looping (for, while) \
- Outside Function call (function()) \

## 📚 Rule Book 

**Rule 1**: Always worst Case \
**Rule 2**: Remove Constants \
**Rule 3**: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b) \
\- for steps in order \
\- for nested steps \
**Rule 4**: Drop Non-dominant terms

## ❓ What Causes Space Complexity?

- Variables
- Data Structures
- Function Call
- Allocations

