"use strict";

function filterRange(arr, a, b) {
    let results = arr.filter(function (item) {
        return item >= a && item <= b;
    });
    return results;
}

let arr= [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);

