"use strict";

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    let countProperties = Object.keys(obj).length;
    return countProperties;
}

console.log(count(user));