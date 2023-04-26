/* DEFINE UNA FUNCION PROXIMAENLAFILA QUE TOME UN ARREGLO (ARREGLO) Y 
UN NUMERO (ELEMENTO) COMO ARGUMENTOS. 

AGREGA EL NUMERO AL FINAL DEL ARREGLO Y 
LUEGO ELIMINA EL PRIMER ELEMENTO DEL ARREGLO. 

LA FUNCION PROXIMAENLAFILA DEBE RETORNAR EL ELEMENTO QUE FUE REMOVIDO */





function proximoEnLaFila(arreglo , elemento){
    arreglo.push(elemento);
    return arreglo.shift();
}

let miArreglo= [1 , 2 , 3 , 4 , 5];
console.log(JSON.stringify(miArreglo));

console.log("El numero removido es: " +proximoEnLaFila(miArreglo , 6));

console.log(JSON.stringify(miArreglo));






console.log("***Bienvenido a la Lavanderia de Carros***")


function Carreras(arreglo , vehiculo){
    arreglo.push(vehiculo);
    return arreglo.shift();
}

let lavanderiaCarros = ["Mazda" , "Toyota" , "Mercedes Benz"];
console.log( JSON.stringify(lavanderiaCarros));

console.log("el vehiculo que salio fue: " + Carreras(lavanderiaCarros , "Kia"));
console.log(JSON.stringify(lavanderiaCarros));

