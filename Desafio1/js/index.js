// Ejemplo 1:

let numero1 = 0;
let resultado = 0;
for(let i=0 ; i<5 ; i++){
    numero1=parseInt(prompt("Ingrese un numero: "));
    
    resultado = numero1 + 10;
    alert(resultado);
}

//Ejemplo 2:

let texto1 = "";
let resultado2 ="El texto ingresado es: ";
texto1 = prompt("Ingrese un texto (para cancelar ESC): ")
while (texto1 != "ESC") {
    resultado2 = resultado2 + texto1;
    console.log(resultado2);
    texto1 = prompt("Ingrese otro texto: ")
}

//Ejemplo 3:

let numero2 = 0;
let resultado3="";
numero2 = parseInt(prompt("Ingresa la cantidad de veces que quiere ver HOLA: "));
console.log(numero2);
for(let i=1 ; i<=numero2 ; i++){   
    console.log(`${i} Hola`);    
}

//Ejemplo 4:

let edad = 0;
let resultado4 = "";

edad= parseInt(prompt("Ingrese su edad: "));
if (edad>=18) {
    alert("Es mayor de esad y puede conducir");
} else {
    alert("No es mayor y no puede conducir");
}

//Ejemplo 5:

let nota=0;
let resultado5="";

nota = parseInt(prompt("Ingrese la nota obtenida: "));

if (nota>=0 && nota <= 3) {
    alert("Muy deficiente");
} else if (nota>3 && nota <= 5) {
    alert("Insuficiente");
}else if (nota>5 && nota <= 6) {
    alert("Suficiente");
}else if (nota>6 && nota <= 7) {
    alert("Bien");
}else if (nota>7 && nota <= 9) {
    alert("Notable");
}else if (nota>9 && nota <= 10) {
    alert("Sobresaliente");
}