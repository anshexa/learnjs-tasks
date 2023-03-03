"use strict";

function ucFirst(str) {
    if (str.length > 0) {
        let firstLetter = str[0].toUpperCase();
        str = `${firstLetter}${str.slice(1)}`;
    }
    return str;
}

console.log(ucFirst(''));