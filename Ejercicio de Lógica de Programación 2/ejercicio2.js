function celsiusAFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

var temperaturaCelsius;
var inputValido = false;

do {
    var input = prompt("Dame la temperatura en Celsius");
    temperaturaCelsius = parseFloat(input);

    if (!isNaN(temperaturaCelsius)) {
        inputValido = true;
    } else {
        alert("Error: Debes ingresar un número válido para la temperatura en Celsius. Por favor, intenta nuevamente.");
    }
} while (!inputValido);

var temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + " grados Celsius son " + temperaturaFahrenheit + " grados Fahrenheit.");
