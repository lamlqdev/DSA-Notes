# Searching

## 1. Linear Search

### 1.1. Overview
Linear search (or sequential search) is a method to find a target value within a list. It sequentially checks each element until a match is found or all elements are searched.

### 1.2. How It Works
 - Start at the beginning of the list.
 - Check each item one by one.
 - Stop when the target is found or the entire list is checked.

### 1.3. Time Complexity
 - **Best Case**: O(1) → The target is the first element.
 - **Average Case**: O(n) → The target is found randomly in the list, requiring an average of n/2 comparisons.
 - **Worst Case**: O(n) → The target is the last element or doesn’t exist.

## 2. Binary Search

### 2.1. Overview
Binary search is an efficient method to find a target in a sorted list. Instead of checking each element sequentially, it repeatedly divides the list in half, discarding the irrelevant portion, until the target is found or the list is exhausted.

> Prerequisite: The list must be sorted

### 2.2. How It Works
 - Start at the middle of the list.
 - Compare the target with the middle element:
   - If the target is equal to the middle element, return it.
   - If the target is smaller, discard the right half and search the left.
   - If the target is larger, discard the left half and search the right.
 - Repeat until the target is found or the list is empty.

### 2.3. Time Complexity
 - **Best Case**: O(1) → if the target is at the middle initially.
 - **Average Case**: O(logn) → Each step reduces the search space by half.
 - **Worst Case**: O(logn) → each step reduces the search space by half.