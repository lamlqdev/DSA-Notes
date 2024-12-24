# 💬 Problem 88: Merge Sorted Array

## 📝 Problem Statement
You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in nums1 and nums2 respectively.

Merge `nums1` and `nums2` into a single array sorted in **non-decreasing order.**

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

## 📚 Example 1

**Input:**
```
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
```

**Output:**
```
[1,2,2,3,5,6]
```

**Explanation:**
```
The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

## 📚 Example 2

**Input:**
```
nums1 = [1], m = 1, nums2 = [], n = 0
```

**Output:**
```
[1]
```

**Explanation:**
```
The arrays we are merging are [1] and [].
The result of the merge is [1].
```

## 📚 Example 3

**Input:**
```
nums1 = [0], m = 0, nums2 = [1], n = 1
```

**Output:**
```
[1]
```

**Explanation:**
```
The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

## 📏 Constraints
 - nums1.length == m + n
 - nums2.length == n
 - 0 <= m, n <= 200
 - 1 <= m + n <= 200
 - -109 <= nums1[i], nums2[j] <= 109

## 🎯 Solution

### Approach 1: Extra Array

#### *Description:*
>
> Use an auxiliary array to merge both arrays while maintaining their sorted order.
> - Create a new array `merged`.
> - Use two pointers to traverse `nums1` (actual part) and `nums2`. Compare elements from both arrays and push the smaller one into merged.
> - Copy any remaining elements from either array into merged.
> - Copy the contents of `merged` back to `nums1`.
> 
#### *Implementation:*
##### JavaScript
```javascript
/**
 * @param 
 * @param 
 * @return 
 */
var merge = function(nums1, m, nums2, n) {
    let merged = [];
    let i = 0, j = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    while (i < m) {
        merged.push(nums1[i++]);
    }

    while (j < n) {
        merged.push(nums2[j++]);
    }

    for (let k = 0; k < merged.length; k++) {
        nums1[k] = merged[k];
    }
};
```

##### C#
```csharp
public void Merge(int[] nums1, int m, int[] nums2, int n) {
    int[] merged = new int[m + n];
    int i = 0, j = 0, k = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            merged[k++] = nums1[i++];
        } else {
            merged[k++] = nums2[j++];
        }
    }

    while (i < m) {
        merged[k++] = nums1[i++];
    }

    while (j < n) {
        merged[k++] = nums2[j++];
    }

    for (int l = 0; l < merged.Length; l++) {
        nums1[l] = merged[l];
    }
}
```

#### *Complexity Analysis*
- **Time Complexity:** 
  - **Value**: `O(m + n)`, 
  - **Explanation**: Merge step traverses both arrays.
- **Space Complexity:** 
  - **Value**: `O(m + n)`
  - **Explanation**: Additional array `merged` is used.

### Approach 2: Two Pointers from End  🚀 

#### *Description:*
>
> This approach avoids extra space by filling `nums1` from the back to the front.
> 
> - Use three pointers:
> 
>   `i`: Tracks the last actual element in `nums1`.
> 
>   `j`: Tracks the last element in `nums2`.
>
>   `k`: Tracks the position to fill in `nums1`.
>
> - Compare elements from `nums1` and `nums2` starting from the back.
> - Place the larger element at `nums1[k] `and move the corresponding pointer.
> - If any elements remain in `nums2`, copy them into nums1.
>
#### *Implementation:*
##### JavaScript
```javascript
/**
 * @param 
 * @param 
 * @return 
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;  
    let j = n - 1; 
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};
```

##### C#
```csharp
public void Merge(int[] nums1, int m, int[] nums2, int n) {
    int i = m - 1;
    int j = n - 1;
    int k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
}
```

#### *Complexity Analysis*
- **Time Complexity:** 
  - **Value**: `O(m + n)`, 
  - **Explanation**: Traverses both arrays once.
- **Space Complexity:** 
  - **Value**: `O(1)`
  - **Explanation**: Operates directly on `nums1` without additional memory.
