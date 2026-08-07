# Plus One

### What is the problem asking?

Say that the digits are [1, 2, 3], the overall number is 123. Incremet this number by one. So it becomes 124. 
The result should should return [1, 2, 4]

Alternatively, if the digit is [9], it should return [1, 0].

### Initial thought

Convert array of nums to a single num in array, add 1, then convert back to array

### Better approach

...

### Key takeaway

- `BigInt()` instead of `Number()` to convert to number without losing precision
- Use `join('')` to convert array of numbers to a single number

