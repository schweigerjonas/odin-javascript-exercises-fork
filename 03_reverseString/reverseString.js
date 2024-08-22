const reverseString = function(string) {
    // let strArr = string.split('');
    // let reverseStrArr = [];
    // let j = 0;

    // for (let i = strArr.length - 1; i >= 0; i--) {
    //     reverseStrArr[j] = strArr[i];
    //     j++;
    // }

    // return reverseStrArr.join('');

    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
