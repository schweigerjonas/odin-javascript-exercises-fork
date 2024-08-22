// ...args: Rest Parameter Syntax. 
// "args" is an array with all values for unnamed parameters.

const removeFromArray = function(array, ...args) {
    // for (let i = 0; i < args.length; i++) {
    //     for (let j = 0; j < array.length; j++) {
    //         console.log('j: ' + j);
    //         console.log('array[j]: ' + array[j]);
    //         if (array[j] === args[i]) {
    //             array.splice(j, 1);
    //             // removing value for index j, moves value for index j+1 to 
    //             // position j => would be skipped in next loop when now value 
    //             // for j+1 is looked at
    //             j--;  
    //             console.log(`${j} + ${array}`);
    //         }
    //     }
    // }
    // return array;

    let filteredArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            filteredArray.push(item);
        }
    });

    return filteredArray;
};

//console.log(removeFromArray([1, 2, 2, 3], 2));

// Do not edit below this line
module.exports = removeFromArray;
