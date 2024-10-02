const sumAll = function(startNumber, stopNumber) {
    
    let totalSum = 0;
    if (startNumber < 0 || stopNumber < 0) {
        return "ERROR";
    }
    else if (!Number.isInteger(startNumber) || !Number.isInteger(stopNumber)) {
        return "ERROR";
    }
    else if (startNumber < stopNumber) {
        for (i = startNumber; i <= stopNumber; i++) {
            totalSum = totalSum + i;
        }
    }
    else if (startNumber > stopNumber) {
        for (i = startNumber; i >= stopNumber; i--) {
            totalSum = totalSum + i;
        }
    }
    
    return totalSum;
    
};

// Do not edit below this line
module.exports = sumAll;
