
    do{
    var input = prompt("Bienvendio, intenta adivinar el numero cecreo, introduce un numero entre el 1 al 100")
    numeroUsuario = parseFloat(input);
    if (!isNaN(numeroUsuario)){
        inputValido= true;
    } else {
        alert("Error: Debes ingresar un número válido para jugar. Por favor, intenta nuevamente.");
    }
} while (!inputValido);



// Generar un número aleatorio entre 1 y 100 (ambos incluidos)
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

if (numeroUsuario == numeroAleatorio){
    console.log("Felicidades!!! haz adivinado el numero secreto: " + numeroAleatorio)
} else {
    do{
        alert("Error, lo lamento, este no es el numero secreto, intentalos nuevamente" + "(el numero magico es:" + numeroAleatorio + " pero no se lo digas a nadie)");
        var input = prompt("intenta adivinar el numero cecreo, introduce un numero entre el 1 al 100")
        numeroUsuario = parseFloat(input);
    } while (numeroUsuario !== numeroAleatorio);
}
 
