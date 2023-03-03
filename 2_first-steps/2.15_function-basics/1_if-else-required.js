// функции работают одинаково, else не обязателен
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    else {
        return console.log('Родители разрешили?')
    }
}

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    return console.log('Родители разрешили?')
}

checkAge(19)
checkAge2(19)
