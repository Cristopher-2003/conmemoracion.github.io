function SeleccionarIdioma(valor){
    let idioma;
    switch (valor){
        case 1:
            idioma = "Español";
            break;

        case 2:
            idioma = "Italiano";
            break;

        case 3:
            idioma = "Frances"
            break;

        default:
            idioma = "Ingles";
            break;
    }
    return idioma;
}

console.log(SeleccionarIdioma(3));


function Relojes(valor){
    let respuesta;
    switch (valor){
        case 1: 
        respuesta = "Cartier";
        break;

        case 2: 
        respuesta = "Rolex";
        break;

        case 3:
            respuesta = "Casio";
            break;

        default:
            respuesta = "Tyrine"
            break;
    }
    return respuesta;
}
console.log(Relojes(1));    