
const botonSigin1 = document.getElementById("boton-Sigin1");
const botonLogin1 = document.getElementById("boton-Login1");
const botonSigin2 = document.getElementById("boton-Sigin2");
const botonLogin2 = document.getElementById("boton-Login2");
const CrearCuenta = document.querySelector(".Sigin");
const IniciarSesion = document.querySelector(".Login");

botonSigin1.addEventListener("click", e =>{
    CrearCuenta.classList.add("hide");
    IniciarSesion.classList.remove("hide")
    botonLogin1.classList.add("activo");
    botonSigin1.classList.remove("activo");
})

botonLogin1.addEventListener("click", e =>{
    IniciarSesion.classList.add("hide");
    CrearCuenta.classList.remove("hide");
    botonSigin1.classList.add("activo");
    botonLogin1.classList.remove("activo");
})

botonSigin2.addEventListener("click", e =>{
    CrearCuenta.classList.add("hide");
    IniciarSesion.classList.remove("hide");
    botonLogin2.classList.add("activo");
    botonSigin2.classList.remove("activo");
})

botonLogin2.addEventListener("click", e =>{
    IniciarSesion.classList.add("hide");
    CrearCuenta.classList.remove("hide");
    botonSigin2.classList.add("activo");
    botonLogin2.classList.remove("activo");
})