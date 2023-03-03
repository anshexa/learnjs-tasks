"use strict";

function getLocalDay(date) {
    let dayWeek = date.getDay();
    if (dayWeek == 0) {
        dayWeek = 7;
    }
    return dayWeek;
}

let date = new Date(2012, 0, 3);
console.log(getLocalDay(date));
