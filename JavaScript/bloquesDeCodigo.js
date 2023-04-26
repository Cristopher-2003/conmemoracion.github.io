let altura = 200;
    {
        let anchura = 100;
        {
            let informacion = "altura + profundidad";
            console.log(altura);
            console.log(anchura);
            console.log(informacion); // -> bloque mas interno
            }
            console.log(altura);
            console.log(anchura);
            console.log(informacion);
    }


/*
 la variable informacion es declarada en el bloque más interno solo es visible dentro de él. 
 
 La variable anchura es visible tanto dentro del bloque en el que fue declarada como dentro del bloque anidado en ella. 
 
 La variable global altura es visible en todas partes.
*/