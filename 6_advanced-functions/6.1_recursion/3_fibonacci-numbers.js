"use strict";

function fib(n) {
    let n1 = 1;
    let n2 = 1;
    let sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return sum;
}


console.log(fib(3));    // 2
console.log(fib(7));    // 13
console.log(fib(77));   // 5527939700884757
