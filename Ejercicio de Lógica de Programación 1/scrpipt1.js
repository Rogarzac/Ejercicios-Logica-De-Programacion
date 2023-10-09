// Solicitar tres datos al usuario
let numero1 = (prompt("Ingresa el primer número:"));
let numero2 = (prompt("Ingresa el segundo número:"));
let numero3 = (prompt("Ingresa el tercer número:"));

// Verificar si los números son iguales
if (numero1 === numero2 && numero2 === numero3) {
  console.log("Los números son iguales: " + numero1);
} else {
  // Crear un arreglo con los números
  let numeros = [numero1, numero2, numero3];

  // Ordenar el arreglo de mayor a menor
  let mayorAMenor = numeros.slice().sort(function(a, b) {
    return b - a;
  });

  // Ordenar el arreglo de menor a mayor
  let menorAMayor = numeros.slice().sort(function(a, b) {
    return a - b;
  });

  // Mostrar los números ordenados de mayor a menor
  let textoMayorAMenor = "Números de mayor a menor: " + mayorAMenor;
  console.log(textoMayorAMenor);

  // Mostrar los números ordenados de menor a mayor
  let textoMenorAMayor = "Números de menor a mayor: " + menorAMayor;
  console.log(textoMenorAMayor);
}