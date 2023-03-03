"use strict";

function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes('viagra')) {
        return true;
    }
    str = str.toUpperCase();
    if (str.includes('XXX')) {
        return true;
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
