"use strict";

function randomInteger(min, max) {
    let num;
    do {
        num = Math.random() * (max * 10);
        num = Math.floor(num);
    }
    while (!(num >= min && num <= max));

    return num;
}

console.log(randomInteger(1, 5));
