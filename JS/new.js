function cambiarDisplay() {
   
    
    let elemento = document.querySelector('.agregardetalles'); 
    elemento.style.display = 'flex'; 

    let ocultar_agg=document.querySelector('#agregar');
    ocultar_agg.style.display = 'none';
    
    let ocultarimg=document.querySelector('#imgg');
    ocultarimg.style.display='none';
}

let datos = [];

function guardar() {
  let ocultarimg = document.querySelector('#imgg');
  ocultarimg.style.display = '';
  let elemento = document.querySelector('.agregardetalles');
  elemento.style.display = 'none';

  let ocultar_agg = document.querySelector('#agregar');
  ocultar_agg.style.display = '';

  let nombre = document.getElementById("Nombre").value;
  let fecha = document.getElementById("Fecha").value;
  let hora = document.getElementById("Hora").value;
  let asunto = document.getElementById("Asunto").value;
  let lugar = document.getElementById("Lugar").value;

 
  datos.push([nombre, fecha, hora, asunto, lugar]);

  
  actualizarTabla();

  
  document.getElementById("Nombre").value = "";
  document.getElementById("Fecha").value = "";
  document.getElementById("Hora").value = "";
  document.getElementById("Asunto").value = "";
  document.getElementById("Lugar").value = "";
  
}

function actualizarTabla() {
    let contenedorEventos = document.querySelector('.eventos');
    contenedorEventos.innerHTML = ''; 
  
    datos.forEach(evento => {
      let nuevaFila = document.createElement('tr');
  
      evento.forEach(valor => {
        let nuevaCelda = document.createElement('td');
        nuevaCelda.textContent = valor;
        nuevaFila.appendChild(nuevaCelda);
      });
  
      contenedorEventos.appendChild(nuevaFila);
    });
  }
  


actualizarTabla();





let redirecionar=()=> {

    window.location.href = "../HTML/home.html"; 
  }

  
 