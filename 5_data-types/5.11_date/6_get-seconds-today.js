"use strict";

function getSecondsToday() {
    let todayDate = new Date().setHours(0, 0, 0, 0);
    let utc = Date.now();
    let diff = utc - todayDate;
    return Math.round(diff / 1000);
}

console.log(getSecondsToday());
