"use strict";

let arr = [5, 2, 1, -10, 8];

function compareNumbers(a, b) {
    return b - a;
}

arr.sort(compareNumbers)

console.log(arr); // 8, 5, 2, 1, -10
