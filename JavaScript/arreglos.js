//los arreglos se los represemta com -> []

var miArreglo = ["Pedro" , 25];
console.log(miArreglo);

var miArregloSegumdo = ["Nora" , "Gioo" , "Juan" , "Paola"];
console.log(miArregloSegumdo);



//Arreglos Anidados

var listaDeEstudiantes = [["Maria" , 20] , ["Sandra" , 25]];
console.log(listaDeEstudiantes);


var verDatos = [[23 , 43 , 5.3] , [45 , 42 , 2] , [23 , 09 , 34]];
console.log(verDatos);

let Nombresp = ["Av. Brasil" , 23 , "pepe" , 45] ;
console.log(Nombresp);








//Acceder a los elementos de un arreglo

let miArreflo = [3 , 20 , 30];

/* 
arreglo: [3 , 20 , 30]
indices:  0    1    2  
*/

console.log(miArreflo[1]);
console.log(miArreflo[2]);
console.log(miArreflo[0]);
//sumar los arreglos por su indice↓
let sumatoria = miArreflo[1] + miArreflo[2];
console.log(sumatoria);




//Cambiar los valores de un arreglo mediante su indice

let PaisesLatinoamericanos = ["Ecuador" , "Colombia" , "Peru"];
console.log(PaisesLatinoamericanos);

PaisesLatinoamericanos[2] = "Brasil";  // ← cambie el valor Peru por Brasil
console.log(PaisesLatinoamericanos);


let numeros = [10 , 20 , 30];
numeros[0] = ["Ecuador" , "Peru" , "Brasil"];
numeros[2] = "Cristopher";
console.log(numeros);



//Acceder a arreglos Multidimensionales o "arreglos anidados"

let arreglo2 = [[1 , 2 , 3] , [4 , 5 , 6] , [7 , 8 , 9]]; // → 3 arreglos anidados en uno


/*
arreglo :   [[1 , 2 , 3] , [4 , 5 , 6] , [7 , 8 , 9]]
indice:           0             1             2
subIndice:    0   1   2     0   1   2     0   1   2
 
*/


//quiero acceder al numero 9
console.log(arreglo2[2][2]);

//quiero acceder al numero 4
console.log(arreglo2[1][0]);

//quiero acceder al numero 3
console.log(arreglo2[0][2]);




let arreglo3 = [
    [1 , 2 , ["juan" , "pepe" , "luisa"]] , 
    [4 , 5 , 6] , 
    [7 , 8 , 9]];

console.log(arreglo3[0][2][1]);
console.log(arreglo3[0][2][2]);




//METODO .PUSH()
/* el metodo push permite agregar elementos a un arreglo hacia la parte final */

let estacionesDelAño = ["Invierno" , "Verano" , "Otoño"];
estacionesDelAño.push("PRIMAVERA");
console.log(estacionesDelAño);


//METODO .POP()
/*el metodo pop elimina el ultimo elemento de un arreglo */

let estaciones = ["invierno" , "verano" , "otoño" , "primavera"];
let estacion = estaciones.pop();
console.log(estaciones);
console.log(estacion) // -> la variable estacion muestra el elemento que fue eliminado porque lo asignamos.

let carros = ["mazda" , "toyota" , "ford" , "nissan"];
console.log(carros);
let carritos = carros.pop();
console.log(carritos);


//METODO .SHIFT()
/*el metodo shift elimina el primer elemento de un arreglo */

let ciudades = ["gye" , "uio" , "mns" , "cue"];
ciudades.shift();
console.log(ciudades);


//METODO .UNSFHIFT()
/*el metodo unshift agrega un elemento al principio de un arreglo */

let carrera = ["jose" , "juan" , "diana" ];
console.log(carrera);
carrera.unshift("pepe");
console.log(carrera);

