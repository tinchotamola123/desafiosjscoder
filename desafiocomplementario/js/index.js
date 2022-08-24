//ARRAYS

const listaNumeros = [10,20,30,40,50,60,70];

//Asigno los valores del array en difenetes variables.
const posicion1 = listaNumeros[0];
const posicion2 = listaNumeros[1];
const posicion3 = listaNumeros[2];
const posicion4 = listaNumeros[3];

console.log(posicion1,posicion2,posicion3,posicion4);

//ahora con destructuracion de array
//usando el operador spread podemos agrupar en un nuevo array los numeros que no necetamos tener en variabgles

const [pos1,pos2,pos3,pos4,...resto] = listaNumeros;

console.log(pos1,pos2,pos3,pos4,resto);

//OBJETOS

const persona ={
    nombre : "Martin",
    apellido : "Tamola",
    edad : 27,
    direccion : {
        calle : "calle 1",
        cp : 5501,
    }
};

const nombre = persona.nombre;
const apellido = persona.apellido;
const edad = persona.edad;

console.log(nombre,apellido,edad);

//usamos destructuracion alias y spread (para crear un nuevo objeto con el resto de propiedades del objeto.)

const {nombre:nombreMartin , apellido:apellidoMartin , edad:edadMartin} = persona;

console.log(nombreMartin,apellidoMartin,edadMartin);


const {nombre:nombreMartin1 ,...restoPersona} = persona;

console.log(nombreMartin1,restoPersona);

//con el objeto por dentro...

const {nombre:nombre2 , direccion: {calle , cp}} = persona;

console.log(nombre2,calle,cp);

//swap de variables

let nombre3 = "juan";
let apellido3 ="perez";

[apellido3,nombre3]=[nombre3,apellido3];

console.log(nombre3,apellido3);

