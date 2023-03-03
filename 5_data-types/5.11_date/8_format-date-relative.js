"use strict";

function formatDate(date) {
    let now = Date.now();
    let diffSecond = now / 1000 - date.getTime() / 1000;

    let oneSecond = 1;
    let oneMinute = oneSecond * 60;
    let oneHour = oneMinute * 60;

    if (diffSecond < oneSecond) {
        return 'прямо сейчас';
    }
    else if (diffSecond < oneMinute) {
        return `${Math.round(diffSecond)} сек. назад`;
    }
    else if (diffSecond < oneHour) {
        let m = Math.round(diffSecond) / oneMinute;
        return `${m} мин. назад`;
    }
    else {
        let day = date.getDate();
        day = String(day).padStart(2, '0');

        let indexMounth = date.getMonth();
        let mounth = String(indexMounth + 1).padStart(2, '0');

        let year = date.getFullYear();
        year = String(year).slice(-2);

        let hours = date.getHours();
        hours = String(hours).padStart(2, '0');

        let minutes = date.getMinutes();
        minutes = String(minutes).padStart(2, '0');

        return `${day}.${mounth}.${year} ${hours}:${minutes}`;
    }
}


console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));
