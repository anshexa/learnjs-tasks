"use strict";

function filterRangeInPlace(arr, a, b) {
    let filteredNumbers = arr.filter(function (num) {
        return num >= a && num <= b;
    });

    arr.length = 0;
    for (let num of filteredNumbers) {
        arr.push(num);
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
