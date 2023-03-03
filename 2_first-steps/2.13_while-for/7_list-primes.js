"use strict";   // работа кода в «современном» режиме

let startNum = 2;
let n = 10;
for (let number = startNum; number <= n; number++) {
    let count = 0;
    for (let det = 2; det < number; det++) {
        if (number % det == 0) {
            count++;
        }
    }
    if (count == 0) {
        console.log(number);
    }
}
