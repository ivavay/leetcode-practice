// Initial approach (not a solution)
var maxProfit = function (prices) {
    let maxIndex = prices.indexOf(Math.max(...prices))
    let minIndex = prices.indexOf(Math.min(...prices))

    let diff;

    for (let i = 0; i < prices.length; i++) {
        if (minIndex < maxIndex) {
            diff = Math.max(...prices) - Math.min(...prices)
            // What if the maxIndex is before the minIndex? 
        } else if (maxIndex < minIndex) {
            diff;
        }
    }
    return diff
};