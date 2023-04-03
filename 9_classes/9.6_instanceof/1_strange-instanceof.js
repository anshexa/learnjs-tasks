"use strict";

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true, т.к. у них одинаковые prototype
