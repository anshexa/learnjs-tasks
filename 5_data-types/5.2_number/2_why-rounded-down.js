"use strict";

let num1 = 1.35;
let num2 = 6.35;

// исходное
console.log(num1.toFixed(1));   // 1.4
console.log(num2.toFixed(1));   // 6.3

// округляем 6.35 до 6.4
console.log((num2 * 10).toFixed(0) / 10);     // 6.4

console.log(Math.round(num2 * 10) / 10);    // 6.4
