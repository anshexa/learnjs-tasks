"use strict";

function f() {
    console.log(this);  // this=null, выведет null
}

let user = {
    g: f.bind(null)
};

user.g();
