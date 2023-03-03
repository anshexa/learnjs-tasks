"use strict";

let promptNum = '3';

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        // this.value += Number(prompt());
        this.value += Number(promptNum);
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
promptNum = '5';
accumulator.read();

console.log(accumulator.value);
