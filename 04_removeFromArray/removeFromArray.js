//this function takes in two arguments, the array itself
// and the rest operator with argument name of remove
// which will be the bundle of element/s made into an array
// to identify which element/s will be removed
const removeFromArray = function(array, ...remove) {
    //the return function will create a new array 
    // 
    return array.filter(val => !remove.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
