"use strict";

function getLastDayOfMonth(year, month) {
    let lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
