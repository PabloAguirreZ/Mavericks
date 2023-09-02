function cambiarDisplay() {
   
    
    let elemento = document.querySelector('.agregardetalles'); 
    elemento.style.display = 'flex'; 

    let ocultar_agg=document.querySelector('#agregar');
    ocultar_agg.style.display = 'none';
    
    let ocultarimg=document.querySelector('#imgg');
    ocultarimg.style.display='none';
}

let datos = [];
function guardar(){
    
    let ocultarimg=document.querySelector('#imgg');
    ocultarimg.style.display='';
    let elemento = document.querySelector('.agregardetalles'); 
    elemento.style.display = 'none';

    let ocultar_agg=document.querySelector('#agregar');
    ocultar_agg.style.display = '';

    let nombre= document.getElementById("Nombre").value;
    datos.push(nombre);
    let fecha= document.getElementById("Fecha").value;
    datos.push(fecha);
    let hora = document.getElementById("Hora").value;
   datos.push(hora);
    let asunto= document.getElementById("Asunto").value;
    datos.push(asunto);
    let lugar= document.getElementById("Lugar").value;
    datos.push(lugar);
    for (const element of datos) 
    // bucle for each el console.log se podria remplazar mandandolo a la base de datos
    {
    console.log(element);}
    // Cuando creemos base de datos mandamos este arreglo "datos[]"  ahi almacenamos los eventos 
//    Aca limpio datos para mandar los siguientes eventos se puede hacer tambien inicializando en la fincion pero por el momento la dejare aqui
        datos.length=0;
        

   
}
let redirecionar=()=> {

    window.location.href = "../HTML/home.html"; 
  }
