"use strict";

// Какое число было много дней назад
function getDateAgo(date, days) {
    let dateAgo = date.getDate() - days;
    let year = date.getFullYear();
    let month = date.getMonth();
    let newDate = new Date(year, month, dateAgo);
    return newDate.getDate();
}

console.log(getDateAgo(new Date(), 1)); // день назад
console.log(getDateAgo(new Date(), 2)); // два назад

let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
