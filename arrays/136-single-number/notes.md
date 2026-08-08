# Single Number

### What is the problem asking?

Find the number in the array that doesn't have duplicates

### Initial thought
1. Keep a array of number that only have duplicates 
2. Find the difference between the two arrays 
3. The difference is the single number 

### Better approach

Better solution: using XOR so duplicates cancel each other and you're left with the single number

### Key takeaway

result ^= num works like: 
0 ^ 4 ^ (1 ^ 1) ^ (2 ^ 2)
Duplicates cancel: 0 ^ 4 ^ 0 ^ 0
Leaving: 4

