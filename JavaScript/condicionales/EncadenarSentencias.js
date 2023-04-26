function interpretarIMC(indiceDeMasaCorporal){
    if( indiceDeMasaCorporal < 18.5){
        console.log("Usted esta bajo de peso");
    }else if( indiceDeMasaCorporal <=24.9){
        console.log("Usted tiene un peso normal")
    }else if( indiceDeMasaCorporal <= 29.9){
        console.timeLog("usted tiene Sobrepeso");
    }else{
        console.error("Usted es una persona Obesa");
    }
}

interpretarIMC(29.4);


function numeros(valor){
    if(valor > 10){
        console.log("El numero es mayor a 10");
    } else if( valor > 20){
        console.log("El numero es mayor a 20");
    } else{
        console.log("El numero es menor a 10 ");
    }
}

numeros(20);