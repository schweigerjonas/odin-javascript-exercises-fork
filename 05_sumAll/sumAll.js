const sumAll = function(min, max) {
    if (min < 0 || max < 0) {
        return 'ERROR';
    }
    // if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    //     return 'ERROR';
    // }
    // if (Math.floor(num1) !== num1 || Math.floor(num2) !== num2) {
    //     return 'ERROR';
    // }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'ERROR';
    }

    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    let sum = 0;
    for (let i = min;  i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
