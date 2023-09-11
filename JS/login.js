
const botonSigin = document.getElementById("boton-Sigin");
const botonLogin = document.getElementById("boton-Login");
const CrearCuenta = document.querySelector(".Sigin");
const IniciarSesion = document.querySelector(".Login");

botonSigin.addEventListener("click", e =>{
    CrearCuenta.classList.add("hide");
    IniciarSesion.classList.remove("hide");
})

botonLogin.addEventListener("click", e =>{
    IniciarSesion.classList.add("hide");
    CrearCuenta.classList.remove("hide");
})


