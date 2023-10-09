do {
    var input = prompt("dame el numero de cual deseas saber su serie de Fibonacci");
    numero =parseFloat(input)
if (!isNaN(numero)){
    inputValido = true;
} else {
    alert("Error: debes ingresar un numero valido para calcular su serie de Fibonacci ");
}
} while (!inputValido);



function serieF(numero) {
    var fibArray = []; //Creo mi array donde seran almacenado los valores
    
    for (let i = 0; i <= numero; i++) { //cilco for, donde pasara nuestro numero capturado hasta cumplor la conidcion donde el numero sea menor o igual
        if (i === 0) {
            fibArray.push(0); ///En la primera vuelta del ciclo, iniciamos con 0 y lo agregamos al indicie 0 de mi array
        } else if (i === 1) {
            fibArray.push(1);///En la segunda vuelta del ciclo, vamos con 1 y lo agregamos al indicie 1 de mi array
        } else { ///Posterirmente, a partir de eso, mi ciclo conciderara que el valor capturado tenra que ser la suma de las dos posiciones anteriores a el
            var fibValue = fibArray[i - 1] + fibArray[i - 2];
            fibArray.push(fibValue); //Igualmente sera capturado en mi Array en el indicie del valor, para 2 el 2 para el 3 el 3 y así
        }
    }
    
    return fibArray; //termina mi funcion y me regresa mi array
}

var resultadoSerie = serieF(numero); //declaro una variable con el resultado de mi funcion para poder aplicarla
console.log(resultadoSerie);

///utilizando el dom, llamamos al documento, usamos el metodo getElementById para cambiar lo que sera mostrado en el parrafo
var resultadoDom = document.getElementById("resultado");
resultadoDom.textContent = "La serie de Fibonacci de: " + numero + " es: " + resultadoSerie; ///contenido nuevo dentro del parrafo



