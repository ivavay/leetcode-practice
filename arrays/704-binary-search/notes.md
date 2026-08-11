# Binary Search 

### What is the problem asking?
Find the target's index and return it 

### Initial thought
```js
var search = function(nums, target) {
    let targetIndex;
    if (nums.includes(target)) {
    targetIndex = nums.indexOf(target);
    } else {
        targetIndex = -1 
    }
    return targetIndex 
};
```
But it is linear O(n) time complexity, when it should be the the O(log n) requirement.

### Better approach

```js
var search = function(nums, target) {
    // Search for target's index in a sorted array

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Find the middle index
        const mid = Math.floor((left + right) / 2);

        // Found the target
        if (nums[mid] === target) {
            return mid;
        }

        // Target must be on the right
        if (nums[mid] < target) {
            left = mid + 1;
        }

        // Target must be on the left
        else {
            right = mid - 1;
        }
    }

    // Target doesn't exist
    return -1;
};
```

### Key takeaway
Binary search starts from finding the middle in a sorted array. If medium is smaller than target, then target must be on the right. Else, target is on the left. Left is the starting index. Right is the last index. 