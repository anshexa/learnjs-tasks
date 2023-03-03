"use strict";

function camelize(str) {
    let arr = str.split('-');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = getCapitalizedWord(arr[i]);
    }
    str = arr.join('');
    return str;
}

function getCapitalizedWord(str) {
    if (str.length > 0) {
        let firstLetter = str[0].toUpperCase();
        str = str.replace(str[0], firstLetter);
    }
    return str;
}


console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
