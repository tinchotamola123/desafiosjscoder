//constructor para los objetos productos
function Producto(nombre,precio,cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.disponible = true;
}

const producto1 = new Producto("Clasicas",150,150,true);
const producto2 = new Producto("Especiales",200,100,true);
const producto3 = new Producto("Nigiris",250,45,true);
const producto4 = new Producto("Geishas",300,40,true);

//declaro un array de productos y pusheo los objetos
let Productos =[];
Productos.push(producto1);
Productos.push(producto2);
Productos.push(producto3);
Productos.push(producto4);

//recorro el array
for(let i=0 ; i<Productos.length ; i++){
    //console.log(Productos[i]);
    console.log(`Nombre de piezas: ${Productos[i].nombre} y el Precio es: $${Productos[i].precio}`)
}

//Producto con poca cantidad menos de 50.
let producPocaCant = Productos.filter(producto => producto.cantidad <= 50);
//console.log(producPocaCant);
console.log("Productos con poca cantidad:");
for (let e of producPocaCant){
    console.log(`Nombre: ${e.nombre} Cantidad: ${e.cantidad}`);
}

//productos ordenados por cantidad 
//nuevo array para ordenarlos
let productosOrdenadosCant = [];
productosOrdenadosCant = Productos.map(e => e);
productosOrdenadosCant.sort(function(menor,mayor){
    return menor.cantidad - mayor.cantidad;
})
console.log("Productos ordenadas por cantidad");
console.log(productosOrdenadosCant);

//recorro el array de los productos, creo una plantilla y se lo agrego al html.
let label = document.createElement("h3");
label.innerHTML=`<br><h3><u>Lista de Piezas</u></h3>`;
document.body.appendChild(label);
for(let producto of Productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML=`<br>
                            <h3>Piezas ${producto.nombre}</h3>
                            <p>Precio: $${producto.precio}</p>
                            <p>Piezas ${producto.cantidad}</p>
                        <br>`;
    document.body.appendChild(contenedor);
}
//listo los productos ordenados por cantidad.
let labelOrdenado = document.createElement("h3");
labelOrdenado.innerHTML=`<br><h3><u>Lista de Piezas Ordenadas Por Cantidad</u></h3>`;
document.body.appendChild(labelOrdenado);
for(let producto of productosOrdenadosCant){
    let contenedor = document.createElement("div");
    contenedor.innerHTML=`<br>
                            <h3>Piezas ${producto.nombre}</h3>
                            <p>Precio: $${producto.precio}</p>
                            <p>Piezas ${producto.cantidad}</p>
                        <br>`;
    document.body.appendChild(contenedor);
}

//listo los productos con poca cantidad menos de 50
let labelPocaCant = document.createElement("h3");
labelPocaCant.innerHTML=`<br><h3><u>Lista de Piezas Con Cantidad Menos de 50</u></h3>`;
document.body.appendChild(labelPocaCant);
for (let producto of producPocaCant){
    let contenedor = document.createElement("div");
    contenedor.innerHTML=`<br>
                            <h3>Piezas ${producto.nombre}</h3>
                            <p>Piezas ${producto.cantidad}</p>
                        <br>`;
    document.body.appendChild(contenedor);
}