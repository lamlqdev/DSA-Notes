function countingSort(arr) {
  // Find the maximum value in the array
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // Create a count array to store the frequency of each element
  const count = new Array(max - min + 1).fill(0);

  // Store the frequency of each element in the count array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Build the sorted array by using the count array
  const sortedArr = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedArr.push(i + min);
      count[i]--;
    }
  }

  return sortedArr;
}

// Example usage:
const arr1 = [5, 3, 8, 4, 2, 3, 3, 1];
console.log("Sorted array:", countingSort(arr1));

function getMax(arr) {
  return Math.max(...arr);
}

function countingSortForRadix(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  // Count the occurrences of each digit in the current place (exp)
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Update the count array to store the actual positions of digits
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array using the updated count
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the output array to arr[] to update the original array
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  const max = getMax(arr);

  // Apply counting sort for every digit, starting with the least significant digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortForRadix(arr, exp);
  }

  return arr;
}

// Example usage:
const arr2 = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Sorted array:", radixSort(arr2));
