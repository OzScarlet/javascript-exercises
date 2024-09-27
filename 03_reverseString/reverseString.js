const reverseString = function(word) {
    let strRev = "";
    for (i = word.length - 1; i >= 0; i--) {
        strRev += word[i]
    }
    return strRev
};

// Do not edit below this line
module.exports = reverseString;
