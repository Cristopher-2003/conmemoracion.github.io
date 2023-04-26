function ClasificarValor(valor){
    if(valor < 5 ){
        console.log("Es menor que 5");
    }
    else if(valor < 10){
        console.log("Es menor que 10");
    }
    else{
        console.log("El numero que usted ingreso es igual a 10 o mayor");
    }
}
ClasificarValor(12);
ClasificarValor(2); /* cumple con 2 condiciones, pero el que ejecutara sera la primera que encuentre*/