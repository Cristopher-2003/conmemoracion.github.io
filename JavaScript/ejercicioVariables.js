const precioUnaRosa = 8;
let numeroDeRosas = 20;
let totalRosas = (precioUnaRosa * numeroDeRosas);


const precioUnLirio = 10;
let numeroDeLirios = 30;
let totalLirios = (precioUnLirio * numeroDeLirios);

const precioUnTulipan = 2;
let numeroDeTulipan = 120;
let totalTulipanes = (precioUnTulipan * numeroDeTulipan);

let precioDeTodasLasFlores = precioUnaRosa + precioUnLirio + precioUnTulipan ;
console.log(precioDeTodasLasFlores);

/*
Rosa: precio unitario: 8 , cantidad: 70 , valor: 560
Lirio: precio unitario: 10 , cantidad: 50 , valor: 500
Tulipán: precio unitario: 2 , cantidad: 120 , valor: 240
Total:  1300 
*/

console.log("Rosa: precio unitario: " + precioUnaRosa + ", cantidad: " + numeroDeRosas + " ,valor: " + totalRosas);

console.log("lirio: precio unitario: " + precioUnLirio + ", cantidad: " + numeroDeLirios + " ,valor: " + totalLirios);

console.log("Tulipan: precio unitario: " + precioUnTulipan + ", cantidad: " + numeroDeTulipan + " ,valor: " + totalTulipanes);

//total de lo vendido:

totalDeTodasLasRosas = (totalLirios + totalRosas + totalTulipanes);
console.log("el total de todo lo vendido es: $" + totalDeTodasLasRosas);

