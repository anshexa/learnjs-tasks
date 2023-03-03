"use strict";

function random(min, max) {
    let num;
    do {
        num = Math.random() * (max * 10);
    }
    while (!(num >= min && num < max));
    
    return num;
}

console.log(random(1, 5));
