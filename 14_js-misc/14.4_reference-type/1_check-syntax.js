"use strict";

let user = {
    name: "John",
    go: function() { console.log(this.name) }
}

(user.go)()     // будет ошибка "ReferenceError: Cannot access 'user' before initialization"
                // т.к. нет точки с запятой до (user... , код читается let user = { go:... }(user.go)()
