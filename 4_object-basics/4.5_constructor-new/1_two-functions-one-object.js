"use strict";

let ab = {};

function A() {
    return ab;
}

function B() {
    return ab;
}

let a = new A();
let b = new B();

console.log(a == b);    // true
