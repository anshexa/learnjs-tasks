let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let objKey in obj) {
        if (typeof (obj[objKey]) == 'number') {
            menu[objKey] *= 2;
        }
    }
}

console.log(menu);
