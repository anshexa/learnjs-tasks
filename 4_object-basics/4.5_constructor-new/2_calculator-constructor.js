"use strict";

let promptNum1 = '3';
let promptNum2 = '5';

function Calculator() {
    this.read = function () {
        // this.num1 = Number(prompt());
        // this.num2 = Number(prompt());
        this.num1 = Number(promptNum1);
        this.num2 = Number(promptNum2);
    };
    this.sum = function () {
        return this.num1 + this.num2;
    };
    this.mul = function () {
        return this.num1 * this.num2;
    };
}

let calculator = new Calculator();
calculator.read();

console.log(`Sum=${calculator.sum()}`);
console.log(`Mul=${calculator.mul()}`);
