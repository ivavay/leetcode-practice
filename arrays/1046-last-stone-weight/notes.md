# Last Stone Weight

### What is the problem asking?

>You are given an array of integers stones where stones[i] is the weight of the ith stone.

>We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

>If x == y, both stones are destroyed, and
>If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
>At the end of the game, there is at most one stone left.

>Return the weight of the last remaining stone. If there are no stones left, return 0.

### Initial thought
1. Find the two max integers of the array 
2. If both are the same value, remove them from array 
3. If both are different, the smaller value is removed, and the bigger value becomes y - x 
4. Stop when there is one value left. Return that value. \
5. If there is no value left. Return 0. 

### Better approach
`shift()` removes the first item from an array and returns that item

### Key takeaway
`indexOf()` tells you where a value is located in an array

