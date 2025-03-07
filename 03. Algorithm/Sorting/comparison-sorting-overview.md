# Comparison Sorting

## 1. Bubble Sort

### 1.1. Overview
**Bubble Sort**: A simple, basic sorting algorithm where the largest value "bubbles up" to the end of the list through multiple passes.

Part of the elementary sorting algorithms: These are straightforward but less efficient compared to advanced algorithms like Merge Sort or Quick Sort.

### 1.2. How It Works
**Compare Adjacent Elements**:
 - Compare the first two elements.
 - If the first element is larger than the second, swap them.
 - Continue this process for all adjacent elements in the array.
 - 
**Bubble Up the Largest Value**:
 - After one pass, the largest value will be at the end of the array.
 - Repeat the process for the remaining unsorted portion of the array.

**Repeat Until Sorted**: Keep passing through the array until no swaps are needed.

### 1.3. Time & Space Complexity
Time Complexity:
 - **Best Case**: O(n) when the array is already sorted.
 - **Average/Worst Case**: O(n^2) due to nested loops.

Space Complexity: O(1) no extra data structures used.


### 1.4. Playground
```js
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Flag to check if any swapping happened
    let swapped = false;

    // Last i elements are already sorted
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if elements are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, then the array is already sorted
    if (!swapped) {
      break;
    }
  }
  return arr;
}
```


## 2. Selection Sort

### 2.1. Overview
**Selection Sort**: Another simple sorting algorithm that works by finding the smallest element in the list and placing it in its correct position, starting from the beginning.

Like Bubble Sort, it has a time complexity of O(n^2) and is not efficient for large datasets.

### 2.2. How It Works
**Find the smallest element**: Start from the first index and iterate through the array to find the smallest element.

**Swap the smallest element with the element at the current index.**

**Repeat for remaining array**: Move to the next index and repeat the process for the unsorted portion of the array.

**Continue until sorte**d: Repeat until the entire array is sorted.

### 2.3. Time & Space Complexity

Time Complexity: Best, Average, and Worst Case: O(n<sup>2</sup>) due to nested loops.

Space Complexity: O(1) no extra space used beyond the input array.

### 2.4. Playground
```js
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Find the index of the smallest element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the element at the current index
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
```

## 3. Insertion Sort

### 3.1. Overview
**Insertion Sort**: A sorting algorithm that works similarly to how people often sort cards in their hands.

It builds the sorted array one element at a time by inserting elements into their correct positions.

### 3.2. How It Works
**Start with the second element**:
 - Assume the first element is sorted.
 - Take the second element and compare it with the first
 - Insert it into the correct position.

**Continue with the next element**:
 - Take the next element and compare it with the elements in the sorted portion of the array.
 - Shift larger elements one position to the right to make space for the new element.
 - Insert the new element in its correct position.

**Repeat**: Continue until all elements are placed in their correct positions

### 3.3. Time & Space Complexity
Time Complexity:
 - Best Case: O(n) when the array is nearly sorted.
 - Average/Worst Case: O(n<sup>2</sup>) due to nested loops.
  
Space Complexity: O(1) no extra data structures used.

### 3.4. Playground
```js
function insertionSort(arr) {
  const n = arr.length;

  // Start from the second element (index 1) since the first element is already considered sorted
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // The element to be inserted into the sorted portion
    let j = i - 1;

    // Shift elements of arr[0..i-1] that are greater than 'key' to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key at its correct position
    arr[j + 1] = key;
  }

  return arr;
}
```

## 4. Merge Sort

### 4.1. Overview
**Merge Sort**: A divide-and-conquer sorting algorithm.

Divides the array into smaller parts, sorts each part, and merges them back together in sorted order.

### 4.2. How It Works
**Divide the Array**: Recursively split the array into halves until each subarray has only one element.

**Merge the Subarrays**: Compare the elements of two subarrays and merge them into a single sorted array.

### 4.3. Time & Space Complexity
Time Complexity: O(nlogn):
- Dividing the array takes O(logn).
- Merging the arrays takes O(n) for each level of recursion.

Space Complexity: O(n) temporary arrays are used to store divided portions during the merge process.

### 4.4. Implementation Skeleton
Merge Sort Function:
 - Base case: If the array has one element, return it.
 - Recursively split the array into left and right halves.
 - Merge the sorted halves using a helper function.

Merge Function:
 - Compare elements from the left and right subarrays.
 - Add the smaller element to the result array.
 - Append any remaining elements from both subarrays.
  
### 4.5. Playground
```js
function mergeSort(arr) {
  // Base case: if the array has only one element, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively split and merge the two halves
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two sorted arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from both arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

## 5. Quick Sort

### 5.1. Overview
**Quick Sort** is a divide-and-conquer algorithm that sorts an array by selecting a pivot and partitioning the array into two sub-arrays:
 - Elements less than the pivot go to the left.
 - Elements greater than the pivot go to the right.

This process is repeated recursively until the entire array is sorted.

### 5.2. How It Works
**Choose a Pivot**: Select a pivot element from the array. Common choices include the first element, the last element, or a random element.

**Partition the Array**: Rearrange elements so that those smaller than the pivot are to its left and those larger are to its right.

**Recursively Apply QuickSort**: Apply the same process to the left and right sub-arrays.

**Combine Results**: Once all sub-arrays are sorted, the entire array becomes sorted.

### 5.3. Time & Space Complexity
Time Complexity:
 - Best Case: O(nlogn) the array is split evenly at each step.
 - Average Case: O(nlogn) random distribution of elements with balanced splits.
 - Worst Case: O(n<sup>2</sup>) pivot causes highly unbalanced splits (e.g., sorted arrays).

Space Complexity: O(logn) due to recursive function calls.


### 5.4. Playground
```js
function quickSort(arr) {
  // Base case: if the array has only one element or is empty, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (here we use the last element as the pivot)
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partition the array into two halves: one with elements less than the pivot,
  // and one with elements greater than the pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively apply quickSort to the left and right subarrays, and combine them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```


