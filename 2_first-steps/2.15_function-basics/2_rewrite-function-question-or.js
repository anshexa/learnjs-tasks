function checkAge(age) {
    return (age > 18) ? true : console.log('Родители разрешили?');
}

function checkAge2(age) {
    return (age > 18) || console.log('Родители разрешили?');
}

let result = checkAge(19);
console.log(result);

result = checkAge2(19);
console.log(result);
