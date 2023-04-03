"use strict";

let obj, method;

obj = {
    go: function () {
        console.log(this);
    }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object] , то же, что и  obj.go();

(method = obj.go)();    // (3) undefined, то же, что и  method = obj.go; method(); - вызывается без привязки this

(obj.go || obj.stop)(); // (4) undefined, из-за оператора || вызывается без привязки this
