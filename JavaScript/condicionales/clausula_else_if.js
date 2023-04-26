function ClasificarValor(valor){
    if (valor %2 ==0){
        console.log("Divisible entre 2");
    }else if (valor % 3 == 0){
        console.log("Divisible entre 3.");
    } else{
        console.log("No es divisible entre las opciones :( ")
    }
}

ClasificarValor(15);
ClasificarValor(70);


function EdadPermitida(edad){
    if (edad <=17){
        console.error("Acceso Denegado | menor de edad");
    } else if (edad >= 90){
        console.error("Acceso Denegado por incumplir la edad establecida");   
    } else{
        console.log("Acceso Permitido :)")
    }
}

EdadPermitida(23);
EdadPermitida(12);
EdadPermitida(99)