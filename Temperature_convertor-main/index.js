const celsiusEl = document.getElementById("Celcius");
const FahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");


function computeTemp() {
   const currentValue = +event.target.value;

   switch (event.target.name) {
    case "Celcius":
    kelvinEl.value = currentValue + 273.15;
    FahrenheitEl.value = currentValue * 1.8 + 32;
    break;
    case "Fahrenheit":
    celsiusEl.value = (currentValue - 32) / 1.8;
    kelvinEl.value = (currentValue - 32) / 1.8 + 273.15;
    break;
    case "Kelvin":
    kelvinEl.value = currentValue - 273.15;
    fahrenheitEl.value = (currentValue - 273.15) * 1.8+ 32;
    break;


    default:
        break;
   }
}