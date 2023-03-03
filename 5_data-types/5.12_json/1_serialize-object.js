"use strict";

let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);

let obj = JSON.parse(json);
