"use strict";

function f() {
    console.log(this.name);     // выведет Вася
}

f = f.bind({name: "Вася"}).bind({name: "Петя"});

f();
