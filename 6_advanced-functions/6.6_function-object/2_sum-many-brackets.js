"use strict";

function sum(a) {
    let currentSum = a;

    function func(b) {
        currentSum += b;
        return func;
    }

    func.valueOf  = function () {
        return currentSum;
    };

    return func;
}

console.log(sum(1)(2).valueOf());  // == 3
console.log(sum(1)(2)(3).valueOf());   // == 6
console.log(sum(5)(-1)(2).valueOf());  // == 6
console.log(sum(6)(-1)(-2)(-3).valueOf()); // == 0
console.log(sum(0)(1)(2)(3)(4)(5).valueOf());  // == 15
