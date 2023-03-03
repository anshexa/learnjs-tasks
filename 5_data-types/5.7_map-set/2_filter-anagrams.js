"use strict";

function aclean(arr) {
    let newArr=[];
    let sets = new Set();

    for (let word of arr) {
        word = word.toLowerCase();
        let arrayOfLetters = word.split('');
        arrayOfLetters.sort();
        let str = arrayOfLetters.join('');
        if (!sets.has(str)) {
            sets.add(str);
            newArr.push(word);
        }
    }
    return newArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
