package ejercicio7;

import java.util.Scanner;

public class Ejercicio7 {
public static void main(String[] args) {
		
		
		Scanner escaner= new Scanner (System.in);
		
		String[] dias= {"lunes","martes","miercoles","jueves","viernes"};
		boolean comprobacionDia=false;
		byte indice=0;
		
		//Se pide un día al usuario
		System.out.println("Ingrese un día de la semana (lunes, martes, miercoles, jueves, viernes)");
		String dia=escaner.nextLine();
		
		//Se verifica que el dato ingresado se encuentre dentro del arreglo
		do {
			indice=0;
			for (String i : dias) {//forEach para recorrer el arreglo
				if(dia.equals(i)) {
					comprobacionDia=true;
					//en caso de que se encuentre una coincidencia ya no es necesario terminar con el arreglo
					break;
				}
				indice++;
			}//cierre for
			//en caso de que este en el arreglo se cierra el ciclo While para evitar ejecutar el codigo siguiente de la linea 32 y 33
			if(comprobacionDia){
				break;
			}
			System.out.println("Por favor, ingrese un día de la semana");
			dia=escaner.nextLine();
		}while(comprobacionDia==false);
		
		
		
		//Verificación que los datos de hora sean correctos
		System.out.println("Ingrese la hora");
		String horaString=escaner.nextLine();
		//Se evalua que el dato ingresado sean 2 datos númericos, si no se piden de nuevo
		while(!horaString.matches("\\d{1,2}")) {
			System.out.println("Por favor, ingrese solo números del 0 al 23 para la hora");
			horaString= escaner.nextLine();
		}
		//Se convierte en un dato de tipo Byte
		byte hora=Byte.parseByte(horaString);
		while ( hora<0 || hora>23){//Comprobar que esten dentro del rango
			System.out.println("Por favor, ingrese solo números del 0 al 23 para la hora");
			hora=escaner.nextByte();
		}
		
		
		//Verificación de los datos de minutos sean correctos
		System.out.println("Ingrese los minutos");
		String minutosString=escaner.nextLine();
		//Se evalua que el dato ingresado sean 2 datos númericos, si no se piden de nuevo
		while(!minutosString.matches("\\d{1,2}")){
			System.out.println("Por favor, ingrese solo números del 0 al 59 para los minutos");
			minutosString= escaner.nextLine();
		}
		//Se convierte en un dato de tipo Byte
		byte minutos=Byte.parseByte(minutosString);
		while ( minutos<0 || minutos>59) {//Comprobar que esten dentro del rango
			System.out.println("Por favor, ingrese solo números del 0 al 59 para los minutos");
			minutos=escaner.nextByte();
		}
		escaner.close();
		
		
		//Se calculan los minutos restantes
		short minutosFaltantes= (short) ((4-indice)*24*60+(15-hora)*60-minutos);
		System.out.println(minutosFaltantes);
		
		
	}//metodo main
}
