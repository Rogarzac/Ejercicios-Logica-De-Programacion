package ejercicio9;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Ejercicio9 {
	
	public static void main(String[] args) {
		
		// Instancia de un HashMap que acepta valores String para almacenar un diccionario de palabras en español con su traducción
		Map<String, String> diccionario = new HashMap<>();
		
		// Insertar cada palabra en español con su respectiva traducción en inglés
		diccionario.put("manzana", "apple");
		diccionario.put("pelota", "ball");
		diccionario.put("coche", "car");
		diccionario.put("libro", "book");
		diccionario.put("guitarra", "guitar");
		diccionario.put("sol", "sun");
		diccionario.put("luna", "moon");
		diccionario.put("agua", "water");
		diccionario.put("computadora", "computer");
		diccionario.put("flor", "flower");
		diccionario.put("casa", "house");
		diccionario.put("árbol", "tree");
		diccionario.put("amigo", "friend");
		diccionario.put("cielo", "sky");
		diccionario.put("nube", "cloud");
		diccionario.put("montaña", "mountain");
		diccionario.put("playa", "beach");
		diccionario.put("amarillo", "yellow");
		diccionario.put("rojo", "red");
		diccionario.put("verde", "green");
		
		// Instanciar un objeto Scanner para la inserción de datos
		Scanner sc = new Scanner(System.in);
		
		// Inicializar una variable ciclo para preguntar al usuario mientras no se altere el ciclo a false
		boolean ciclo = true;
		
		// Inicio del ciclo while
		while(ciclo) {
			
			// Impresión de instrucciones en pantalla
			System.out.println("****************************************");
			System.out.println("Diccionario Español-Inglés");
			System.out.println("Por favor, ingrese una palabra en español:");
			
			// Almacenamiento de los datos ingresados en una variable palabra
			String palabra = sc.nextLine();
			
			// Si la palabra ingresada se encuentra en una key del diccionario, se muestra la traducción en inglés
			if(diccionario.containsKey(palabra)) {
				
				// Impresión del resultado con la traducción
				System.out.println(palabra + " en inglés se traduce como " + diccionario.get(palabra));
				ciclo = false; // Fin del ciclo cuando se traduce una palabra
			} else {
				
				// Si no se cumple la condición de búsqueda, se imprime que la palabra no se encuentra en el diccionario
				System.out.println("Lo siento, la palabra " + palabra + " no se encuentra en nuestro diccionario.");
			} // Cierre del if-else
			
		} // Cierre del while
		sc.close(); // Cierre del objeto Scanner para ahorrar memoria
	} // Cierre del método main
} // Cierre de la clase
