"use strict";

// конструктор
function Calculator() {
    this.metods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.calculate = function (str) {
        let splitStr = str.split(' ');

        let num1 = Number(splitStr[0]);
        let operator = splitStr[1];
        let num2 = Number(splitStr[2]);

        return this.metods[operator](num1, num2);
    };

    this.addMethod = function (name, func) {
        this.metods[name] = func;
    }
}


let calc = new Calculator;
console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
