"use strict";

let from = 5;
let to = 10;


// через setInterval
function printNumbers1(from, to) {
    function run() {
        console.log(from);
        if (from >= to) {
            clearInterval(timerId);
        }
        from++;
    }

    let timerId = setInterval(run, 1000);
}

// printNumbers1(from, to);


// через рекурсивный setTimeout
function printNumbers2(from, to) {
    function run() {
        console.log(from);
        let timerId = setTimeout(run, 1000);
        if (from >= to) {
            clearTimeout(timerId);
        }
        from++;
    }

    setTimeout(run, 1000);
}

printNumbers2(from, to);
