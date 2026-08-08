var isAnagram = function(s, t) {
    // Convert s/t to an array, sort it, and convert it back to a string
    let sString= [...s].sort().join('');
    let tString = [...t].sort().join('');

    if (sString == tString) {
        return true
    } else {
        return false
    }
};