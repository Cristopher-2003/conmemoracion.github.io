let producto = "hamburguesa";

switch (producto){
    case "helado":
    console.log("el costo de helado es de $2.70");
    break;

    case "hamburguesa":
        console.log("el costo de hamburguesa es de $5.00");
        break;

        case "tacos":
            console.log("El costo de los tacos es de $4.00");
            break;
}

function clasificarValor(valor){
    var respuesta;
    switch (valor){
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(2));

/* ejercicio 2 */

