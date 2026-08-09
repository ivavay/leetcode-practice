var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        // Find the biggest value, and remove it 
        const y = Math.max(...stones);
        stones.splice(stones.indexOf(y), 1);
        // Find the second biggest value, then remove it 
        const x = Math.max(...stones);
        stones.splice(stones.indexOf(x), 1);
        // If diff, put the difference back to stones array 
        if (x !== y) {
            stones.push(y - x);
        }
    }
      return stones.length === 1 ? stones[0] : 0;
};