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

// Example usage:
const arr1 = [5, 3, 8, 4, 2];
console.log("Sorted array:", bubbleSort(arr1));

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

// Example usage:
const arr2 = [5, 3, 8, 4, 2];
console.log("Sorted array:", selectionSort(arr2));

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

// Example usage:
const arr3 = [5, 3, 8, 4, 2];
console.log("Sorted array:", insertionSort(arr3));

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

// Example usage:
const arr4 = [5, 3, 8, 4, 2];
console.log("Sorted array:", mergeSort(arr4));

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

// Example usage:
const arr5 = [5, 3, 8, 4, 2];
console.log("Sorted array:", quickSort(arr5));
