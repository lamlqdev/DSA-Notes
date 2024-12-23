function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Return the index if the target is found
    }
    // If the middle element is less than the target, discard the left half
    else if (array[mid] < target) {
      left = mid + 1;
    }
    // If the middle element is greater than the target, discard the right half
    else {
      right = mid - 1;
    }
  }
  return -1; // Return -1 if the target is not found
}

// Example usage
const sortedArray = [10, 20, 30, 40, 50];
const targetValue = 30;
const binaryResult = binarySearch(sortedArray, targetValue);
console.log(binaryResult);
