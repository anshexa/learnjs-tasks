"use strict";

let promptNum1 = '3';
let promptNum2 = '5';

let calculator = {
    num1: 0,
    num2: 0,
    read() {
        // this.num1 = Number(prompt());
        // this.num2 = Number(prompt());
        this.num1 = Number(promptNum1);
        this.num2 = Number(promptNum2);
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
