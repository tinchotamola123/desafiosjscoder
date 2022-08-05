//Obtengo todas las variables que necesito
const nombre =document.getElementById("Nombre");
const email =document.getElementById("Email");
const password =document.getElementById("Password");
const formulario = document.getElementById("Formulario");
const error = document.getElementById("Error");
error.style.color ="red";

//escucho el evento submit
formulario.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(nombre.value);
    console.log(email.value);
    console.log(password.value);
    let mensajeError = [];
    //expresion regular para validar el email
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    //valido qe no este vacio los campos 
    if(nombre.value.lenght <5 || nombre.value === "" || nombre.value === null){
        mensajeError.push(`El nombre no es valido debe tener mas de 5 caracteres <br>`); 
    }
    if(!regexEmail.test(email.value)){
        mensajeError.push(`El email es invalido debe poner @gmail.com <br>`); 
    }
    if(password.value === "" || password.value === null){
        mensajeError.push(`El password no puede quedar vacio <br>`); 
    }
    //meto los errores en un arreglo y lo muestro en la pagina
    error.innerHTML = mensajeError.join(`<br>`);

})

//Evento de mouseover para cambiar de color la caja a roja.
const caja = document.getElementById("Caja");
caja.addEventListener('mouseover',(e)=>{
    caja.classList.toggle("boxRoja");
})
