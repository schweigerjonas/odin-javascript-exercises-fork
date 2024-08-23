const leapYears = function(year) {
    // declare constants for better readability
    const isDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;
    let isLeapYear = false;
    
    if (isDivisibleByFour && !isCentury || isDivisibleByFourHundred) {
        isLeapYear = true;
    }    

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
