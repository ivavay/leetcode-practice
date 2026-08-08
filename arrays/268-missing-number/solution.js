var missingNumber = function(nums) {
    // 1. Find the length of array + 1 

    let n = nums.length + 1
    // 2. Lay out the range of numbers from n 
    const fullDigits = Array.from({ length: n }, (_, i) => i );

    // Sort from ascending 
    nums.sort((a, b) => a - b);

    // 3. Find the number that is missing from the full array by using find() and !includes()
    let missingNumber = fullDigits.find(num => !nums.includes(num));
   
    return missingNumber
};