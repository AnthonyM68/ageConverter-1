// Écrivez ici votre script
const btn = document.getElementById('button');
const divAge = document.getElementById('age');
const result = document.getElementById('result');
let radios = document.forms["formA"].elements["choix"];
let bisextile = 0;
let age = '';

function secondes(age) {
    result.innerHTML = lisibilite_nombre((age * 365 + bisextile) * 24 * 60 * 60);
};
function minutes(age) {
    result.innerHTML = lisibilite_nombre(((age * 365 + bisextile) * 24) * 60);
};
function heures(age) {
    result.innerHTML = lisibilite_nombre((age * 365 + bisextile) * 24);
};
function jours(age) {
    result.innerHTML = lisibilite_nombre(age * 365 + bisextile);
};
btn.addEventListener('click', function () {
    event.preventDefault();
    age = divAge.value;
    if (age === '') {
        result.setAttribute("style", "red");
        result.innerHTML = "Veuillez indiquer votre âge SVP";
    } else {
        theSwitch(radios.value);
    }
});
function lisibilite_nombre(num) {
    let result = num.toLocaleString();
    return result;
}
for (radio in radios) {
    radios[radio].onclick = function () {
        theSwitch(this.value);
    }
}
function bisextiles(age) {
    if (bisextile != 0) {bisextile = 0;}
    for (let i = 0; i < age; i++) {
        if (i % 4 === 0) {
            bisextile += 1;
        } else {
            bisextile += 0;
        }
    }
    return bisextile;
}
function theSwitch(option) {
    bisextiles(age);
    switch (option) {
        case 'option1':
            secondes(age);
            break;
        case 'option2':
            minutes(age);
            break;
        case 'option3':
            heures(age);
            break;
        case 'option4':
            jours(age);
            break;
    }
}
