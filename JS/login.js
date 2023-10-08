const botonSigin = document.getElementById("boton-iniciar");
const botonLogin = document.getElementById("boton-sigin");
const CrearCuenta = document.querySelector(".crear-cuenta");
const IniciarSesion = document.querySelector(".Login");

// Evento onclick del botón "Registrarse"
botonSigin.addEventListener("click", e => {
  // Oculta el div "Crear cuenta"
  CrearCuenta.classList.add("hide");
  // Muestra el div "Iniciar sesión"
  IniciarSesion.classList.remove("hide");
  // Establece el botón "Iniciar sesión" como activo
  botonLogin.classList.add("activo");
  // Establece el botón "Registrarse" como inactivo
  botonSigin.classList.remove("activo");
});

// Evento onclick del botón "Iniciar sesión"
botonLogin.addEventListener("click", e => {
  // Oculta el div "Iniciar sesión"
  IniciarSesion.classList.add("hide");
  // Muestra el div "Crear cuenta"
  CrearCuenta.classList.remove("hide");
  // Establece el botón "Registrarse" como activo
  botonSigin.classList.add("activo");
  // Establece el botón "Iniciar sesión" como inactivo
  botonLogin.classList.remove("activo");
});
