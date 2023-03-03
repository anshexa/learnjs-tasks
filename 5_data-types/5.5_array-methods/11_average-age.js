"use strict";

function getAverageAge(users) {
    let averageAge = users.reduce(
        (sum, user) => sum + user.age / users.length, 0
    );
    return averageAge;
}

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 29};

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // 28
