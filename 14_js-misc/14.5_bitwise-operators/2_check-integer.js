"use strict";

function isInteger(num) {
    let roundNum = num ^ 0;
    return roundNum === num;
}


console.log(isInteger(1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(-0.5)); // false
