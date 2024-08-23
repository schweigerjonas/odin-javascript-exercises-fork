const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    if (Math.floor(num1) !== num1 || Math.floor(num2) !== num2) {
        return 'ERROR';
    }

    let smallNum = num1;
    let bigNum = num2;
    let sum = 0;

    if (num1 > num2) {
        smallNum = num2;
        bigNum = num1;
    } 
    for (let i = smallNum;  i <= bigNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
