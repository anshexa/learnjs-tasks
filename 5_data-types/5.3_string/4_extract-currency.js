"use strict";

function extractCurrencyValue(str) {
    str = str.slice(1);
    return Number(str);
}

console.log(extractCurrencyValue('$120'));
