var plusOne = function(digits) {
    // convert array of numbers to a single number in array 
    const singleNumber = digits.join('');

    // use BigInt instead of Number so you don't lose precision with bigger numbers 
    const newArrayPlusOne = [BigInt(singleNumber)+BigInt(1)]
    const result = String(newArrayPlusOne[0]).split('').map(Number)
    return result
}
