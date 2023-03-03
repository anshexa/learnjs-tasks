"use strict";

function groupById(arr) {
    let result = arr.reduce(
        function (obj, user) {
            obj[user.id] = user;
            return obj;
        }, {});
    return result;
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById);
