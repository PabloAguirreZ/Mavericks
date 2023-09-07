function cambiarDisplay() {
  // Función que cambia la visualización de elementos en la página

  let elemento = document.querySelector(".agregardetalles");
  elemento.style.display = "flex";

  let ocultar_agg = document.querySelector("#agregar");
  ocultar_agg.style.display = "none";

  let ocultarimg = document.querySelector("#eventos");
  ocultarimg.style.display = "none";
}
// Arreglo para almacenar datos de eventos
let datos = [];

function guardar() {
  let quitarevent = document.querySelector("#sineventos");
  quitarevent.style.display = "none";

  let ocultarimg = document.querySelector("#eventos");
  // Muestra un elemento con la ID 'eventos'
  ocultarimg.style.display = "";
  let elemento = document.querySelector(".agregardetalles");
  elemento.style.display = "none";

  let ocultar_agg = document.querySelector("#agregar");
  ocultar_agg.style.display = "";

  // Obtención de los valores ingresados por el usuario
  let nombre = document.getElementById("Nombre").value;
  let fecha = document.getElementById("Fecha").value;
  let hora = document.getElementById("Hora").value;
  let asunto = document.getElementById("Asunto").value;
  let lugar = document.getElementById("Lugar").value;

  // Almacenar los datos en el arreglo 'datos'
  datos.push([nombre, fecha, hora, asunto, lugar]);

  actualizarTabla();

  // Limpiar los campos de entrada de datos
  document.getElementById("Nombre").value = "";
  document.getElementById("Fecha").value = "";
  document.getElementById("Hora").value = "";
  document.getElementById("Asunto").value = "";
  document.getElementById("Lugar").value = "";
}

// Función para actualizar la tabla en la página con los datos almacenados en 'datos'

function actualizarTabla() {
  let contenedorEventos = document.querySelector(".eventos");
  contenedorEventos.innerHTML = ""; // Vaciar el contenido actual de la tabla

  // Recorrer los datos y agregarlos a la tabla
  datos.forEach((evento) => {
    let nuevaFila = document.createElement("tr");

    evento.forEach((valor) => {
      let nuevaCelda = document.createElement("td");
      nuevaCelda.textContent = valor;
      nuevaFila.appendChild(nuevaCelda);
    });

    contenedorEventos.appendChild(nuevaFila);
  });
}

actualizarTabla();

let redirecionar = () => {
  window.location.href = "../HTML/home.html";
};
