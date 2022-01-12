var elForm = document.querySelector('.currency__form');
var elInput = document.querySelector('.currency__input');
var elSelect = document.querySelector('.currency__select');
var elResult = document.querySelector('.result__heading');

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    var inputValue = elInput.value;
    var selectValue = elSelect.value;

    var USD = 10890.00;
    var RUBL = 110.00;
    var EURO = 11800.00;

    if (selectValue === "USD") {
        elResult.textContent = (USD * elInput.value).toFixed(2);
    } else if (selectValue === "EURO") {
        elResult.textContent = (EURO * elInput.value).toFixed(2);
    } else if (selectValue === "RUBL") {
        elResult.textContent = (RUBL * elInput.value).toFixed(2);
    } else {
        elResult.textContent = 'Iltimos valyutani kiriting!'
    }
} )