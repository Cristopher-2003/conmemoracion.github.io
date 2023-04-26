function SumaDeNumeros(){
    console.log(1 + 2);
}

SumaDeNumeros();   // → para ejecutar llamamos al nombre de la funcion




//PASARLE ARGUMENTOS A UNA FUNCION
//numeros
function suma(num1 , num2){ //-> estos son los argumentos
    console.log(num1 + num2);
}

suma( 4 , 6);
suma(1 , 1);
suma(2 , 8);
suma(9 , 20);
suma(3 ,5);
suma(0 , 1);


//cadenaDeCaracteres
function concatenarCadenas(cadena1 , cadena2 , cadena3){
    console.log(cadena1 + " " + cadena2 + " " +  cadena3);
}

concatenarCadenas("hola" , "estoy" , "programando");





//VARIABLE GLOBAL
//definimos fuera de la funcion, la variable estara disponible en todo el programa.
let miNombre = "Cristopher";



console.log(miNombre);


function mostrarMiNombre(){
    console.log(miNombre);
}
mostrarMiNombre();


console.log("mi nombre es: " + miNombre);


/*VARIABLE LOCAL
Una variable local estara disponible solo en una parte del programa, en este caso solo estara disponible dentro de la funcion porque es ahi donde la definimos.
*/

function Saludar(){
    let saludo = "hola";
    console.log(saludo);
}
Saludar();

//console.log(saludo);  
//  ↑ esto sale error porque intentamos llamar a una variable local y no global




let Nombre = "Cristopher";

function MostrarNombre(){
    var Nombre = "Andres";
    console.log(Nombre);
}

MostrarNombre();
console.log(Nombre);

