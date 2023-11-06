'use strict';

const tempInput = document.getElementById('temperature')
const fahrenheit = document.getElementById('Fahrenheit');
const celsius = document.getElementById('Celsius');
const output = document.querySelector('.output p');
const btn = document.querySelector('.btn');
const bckBtn = document.querySelector('.background-mode')

btn.addEventListener('click', function() {
    const temperatureValue = parseFloat(tempInput.value)

    if (isNaN(temperatureValue)) {
        output.textContent = "Please enter a valid value";
        return;
    }

    if (fahrenheit.checked) {
        let result = ((temperatureValue * 9 / 5) + 32).toFixed(2);
        output.textContent = `${temperatureValue}°C are equal to ${result}°F`
    } else {
        let result = ((temperatureValue - 32) * (5 / 9)).toFixed(2);
        output.textContent = `${temperatureValue}°F are equal to ${result}°C`
    }
})

bckBtn.addEventListener("click", toggleMode);

const body = document.body;
function toggleMode() {
    
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}
