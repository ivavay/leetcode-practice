var search = function(nums, target) {
    let targetIndex;
    if (nums.includes(target)) {
    targetIndex = nums.indexOf(target);
    } else {
        targetIndex = -1 
    }
    return targetIndex 
};