do {
    var input = prompt("Dame el numero que deseas saber su facotrial");
    numero = parseFloat(input);

    if (!isNaN(numero)) {
        inputValido = true;
    
    } else {
        alert("Error: Debes ingresar un número válido para calcular su facotrial. Por favor, intenta nuevamente.");
    }
} while (!inputValido);




function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        console.log(numero); //Aqui es cuando el codigo termina al mostrar 1 ya que mi numero llego a 1 o 0
        return 1;
    } else {
        console.log(numero); //Con esto compruebo que no se esta almacenando el valor, solo es un control de flujo que ejcuta constantemente una multiplicacion
        return numero * calcularFactorial(numero - 1);
        
    }
}

console.log(calcularFactorial(numero));
var resultadoFacotrial  = calcularFactorial(numero); //alamceno el valor de mi funcion en una variable para poder utilizarlo

// Seleccionar el elemento donde mostrar el resultado por su id
var resultadoDom = document.getElementById("resultado");

// Actualizar el contenido del elemento con el resultado
resultadoDom.textContent = "El factorial de " + numero + " es " + resultadoFacotrial;