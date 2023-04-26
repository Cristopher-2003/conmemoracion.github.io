//incrementar el valor de una variable;

// opcion 1

var misLibrosComprados = 120;
console.log(misLibrosComprados);

misLibrosComprados = misLibrosComprados + 1;  // <- Incrementa en uno
console.log(misLibrosComprados);

// opcion 2: ahorrar lineas de codigo

misLibrosComprados++; // <- incrementa en uno
console.log(misLibrosComprados);



//ejercicio
var hojas = 20;
console.log("Cristopher tiene " + hojas + " hojas");
hojas ++;
console.log("Sin embargo, Pedro le regalo una hoja mas. Entonces Cristopher ahora tiene " + hojas + " hojas");



/*decrementar el valor de una variable */
var numeroEstudiantes = 256;
console.log("el numero de estudiantes es:" + numeroEstudiantes);
numeroEstudiantes --;
console.log("Sin embargo se retiro un estudiante, por lo tanto ahora hay " + numeroEstudiantes + " estudiantes.")

numeroEstudiantes = numeroEstudiantes - 12;
console.log("Pero ayer se fueron expulsados 12 estudiantes. Asi que la cifra total de estudiantes es de:" + numeroEstudiantes);

