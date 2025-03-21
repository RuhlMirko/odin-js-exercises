const removeFromArray = function (arr, target) {
    const newArr = []
    for (let item of arr) {
        if (item !== target) {
            newArr.push(item)
        }
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
