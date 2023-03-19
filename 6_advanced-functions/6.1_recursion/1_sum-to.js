"use strict";

function sumTo1(n) {
    // с использованием цикла
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}


function sumTo2(n) {
    // через рекурсию
    if (n == 1) {
        return n;
    }
    else {
        return n + sumTo2(n - 1);
    }
}


function sumTo3(n) {
    // с использованием формулы арифметической прогрессии
    let sum;
    sum = ((1 + n) / 2) * n;
    return sum;
}


console.log(sumTo1(100));
console.log(sumTo2(100));
console.log(sumTo3(100));
