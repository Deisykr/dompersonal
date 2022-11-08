//CONTROLANDO ETIQUETAS CON EL DOM

//1 . alamcenar en memoria (crear en una variable)
//La etiqueta que quiero controlar

let etiquetaImagen=document.getElementById("fotografia")



//2 controlando nuestras etiquetas
//2.1 Controlar es cambiar la fuente (SRC
etiquetaImagen.src="./img/azul.png"

//2.2 controlar es cambioar el contenido de texto de una etiqueta
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="HISTORIA"

//2.3 Controlar es agregar estilos
etiquetaTitulo.classList.add('fuente','alineado')

//2.4 controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove('text-danger')

//2.5 controlar es DETECTAR EVENTOS
let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click", function(evento){
    alert("estamos haciendo clic")
})