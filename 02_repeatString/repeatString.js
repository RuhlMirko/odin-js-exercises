const repeatString = function (string, times) {
    let newString = ''
    for (let step = 0; step < times; step++) {
        newString += string
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
