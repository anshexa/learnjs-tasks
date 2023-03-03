"use strict";

function copySorted(arr) {
    let newArr = arr.slice();
    newArr.sort();
    return newArr;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
