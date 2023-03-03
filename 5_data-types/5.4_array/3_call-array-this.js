"use strict";

let arr = ['a', 'b'];
arr.push(function () {
    console.log(this);
});

arr[2]();   // выведет [ 'a', 'b', [Function (anonymous)] ]
