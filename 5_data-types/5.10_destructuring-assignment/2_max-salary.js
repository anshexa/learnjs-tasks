"use strict";

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxSalary = 0;
    let nameMaxSalary = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            [nameMaxSalary, maxSalary] = [name, salary];
        }
    }
    return nameMaxSalary;
}

console.log(topSalary(salaries));
