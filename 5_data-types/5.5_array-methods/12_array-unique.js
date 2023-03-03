"use strict";

function unique(arr) {
    let result = [];
    for (let arrElement of arr) {
        if (!result.includes(arrElement)) {
            result.push(arrElement);
        }
    }
    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O