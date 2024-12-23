function factorial(n) {
  if (n === 0) return 1; // Base Case
  return n * factorial(n - 1); // Recursive Case
}
console.log(factorial(5)); // Output: 120


function fibonacci(n) {
  if (n <= 1) return n; // Base Case
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive Case
}
console.log(fibonacci(6)); // Output: 8


function sumArray(arr) {
  if (arr.length === 0) return 0; // Base Case
  return arr[0] + sumArray(arr.slice(1)); // Recursive Case
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


function towerOfHanoi(n, from, to, aux) {
  if (n === 1) {
      console.log(`Move disk 1 from ${from} to ${to}`);
      return;
  }
  towerOfHanoi(n - 1, from, aux, to); // Move n-1 disks to auxiliary
  console.log(`Move disk ${n} from ${from} to ${to}`); // Move nth disk to target
  towerOfHanoi(n - 1, aux, to, from); // Move n-1 disks to target
}
towerOfHanoi(3, "A", "C", "B");