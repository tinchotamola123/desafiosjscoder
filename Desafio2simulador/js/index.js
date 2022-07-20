//simulador de carrito de compras de sushi el usuario ingresa la pieza que quiere comprar y la cantidad de piezas y la funcion devulve el precio por la cantidad de piezas que quiere llevar.

//funcion que multiplica la cantidad de piezas clasicas por el precio
function sumaClasicos(cantClas) {
    const precio = 150;
    return resultado = precio * cantClas;
}
//funcion que multiplica la cantidad de piezas especiales por el precio
function sumaEspeciales(cantEsp) {
    const precio = 200;
    return resultado = precio * cantEsp;
}
//funcion que multiplica la cantidad de piezas nigiris por el precio
function sumaNigiris(cantNigi) {
    const precio = 250;
    return resultado = precio * cantNigi;
}
//funcion que multiplica la cantidad de piezas geishas por el precio
function sumaGeisha(cantGei) {
    const precio = 300;
    return resultado = precio * cantGei;
}
    //variable para ir sumando las compras
    let carrito = 0;
    //varible para la condicion del while
    let seleccion=0;
    while(seleccion != 6){
        //el usuario ingresa que quiere comprar
        let seleccion = parseInt(prompt("SELECCIONAR LA PIEZA QUE QUIERE COMPRAR  \n 1 - ROLLS CLASICOS  \n 2 -  ROLLS ESPECIALES \n 3 -  NIGUIRIS \n 4 -  GEISHAS \n 5 - TOTAL A PAGAR"));
        switch (seleccion) {
        case 1:
            //llama la funcion y devuelve el resultado y lo va sumando al carrito
            let cantClas = parseInt(prompt("INGRESA LA CANTIDAD DE ROLLS CLASICOS QUE QUIERE LLEVAR (PRECIO UNITARIO POR PIEZA = $150)"));
            console.log("El precio de las " + cantClas + " piezas clasicas es: $" + sumaClasicos(cantClas));
            carrito += sumaClasicos(cantClas);
            break;
        case 2:
            //llama la funcion y devuelve el resultado y lo va sumando al carrito
            let cantEsp = parseInt(prompt("INGRESA LA CANTIDAD DE ROLLS ESPECIALES QUE QUIERE LLEVAR (PRECIO UNITARIO POR PIEZA = $200)"));
            console.log("El precio de las " + cantEsp + " piezas Especiales es: $" + sumaEspeciales(cantEsp));
            carrito += sumaEspeciales(cantEsp);
            break;
        case 3:
            //llama la funcion y devuelve el resultado y lo va sumando al carrito
            let cantNigi = parseInt(prompt("INGRESA LA CANTIDAD DE NIGUIRIS QUE QUIERE LLEVAR (PRECIO UNITARIO POR PIEZA = $250)"));
            console.log("El precio de las " + cantNigi + " piezas Niguiri es: $" + sumaNigiris(cantNigi));
            carrito += sumaNigiris(cantNigi);
            break;
        case 4:
            //llama la funcion y devuelve el resultado y lo va sumando al carrito
            let cantGei = parseInt(prompt("INGRESA LA CANTIDAD DE GEISHAS QUE QUIERE LLEVAR (PRECIO UNITARIO POR PIEZA = $300)"));
            console.log("El precio de las " + cantGei + " piezas Geisha es: $" + sumaGeisha(cantGei));
            carrito += sumaGeisha(cantGei);
            break;
        case 5:
            // caso 5 sale y te devuelve el total
            alert("GRACIAS POR LA COMPRA EL TOTAL ES: $"+carrito);
            break;
        default:
            alert("Ingreso una opción inválida. Elija otra del 1 al 5.".toUpperCase());
            break;
        }
    }