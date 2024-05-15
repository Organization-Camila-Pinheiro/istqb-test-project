function imprimir(mensaje, id){
let parrafo = document.getElementById(id)
parrafo.innerText = mensaje
}

function bienvenida(){
    let nombre = document.getElementById("nombre1").value;

    let mensaje = "Hola " + nombre + ", sea bienvenida al examen de ISTQB! Que hagas un buen examen!"
    imprimir(mensaje, "respuesta1")
}