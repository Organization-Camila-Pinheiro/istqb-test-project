function imprimir(mensaje, id){
let parrafo = document.getElementById(id)
parrafo.innerText = mensaje
}

function bienvenida(){
    let nombre = document.getElementById("nombre1").value;

    let mensaje = "Hola " + nombre + ", sea bienvenida al examen de ISTQB! Que hagas un buen examen!";
    imprimir(mensaje, "welcome1");
}

function showAnswer(){
    let answer = "C";
    let mensaje = "La respuesta correcta es la " + answer;
    imprimir(mensaje, "respuesta1");
}

function correctAnswer(){

    let answerCorrect = "C";
    let emptyAnswer = ""
    let answerStudent = document.getElementById("pregunta1").value;
    let mensaje = ""
    let score = 0

    if(answerStudent === emptyAnswer ){
        score = 0
        mensaje = "Respuesta equivodada! Puntuación: " + score;

    }
    else if(answerStudent === answerCorrect){
        score = 2
        mensaje = "Respuesta correcta! Puntuación: " + score;
    }

    else if(answerStudent !== answerCorrect){
        score = -1
        mensaje = "Respuesta equivodada! Puntuación: " + score;
    }
    
    imprimir(mensaje, "respuesta1");

    }
    


    let lista = ["B. Pruebas de Regresión","C. Todos aquellos que puedan tener algún uso para la herramienta","A. Requerimientos", "A. Analista funcional", "A. Diseño de Prueba","C. Calculos incorrectos", "C. Validan que el sistema esté completo", "B. Prueba de Aceptación de Usuario", "A. Evaluan las funciones que el sistema debe realizar", "A. Se  basan en la estructura interna del sistema"];


function mostrarrespuesta(numeroPregunta) {
    let respuestaSeleccionada = document.getElementById("pregunta"+numeroPregunta).value;
    let mensaje = "Su respuesta: " + respuestaSeleccionada;
    imprimir(mensaje, "hacontestado"+numeroPregunta);
    
    let mensaje2 = "La respuesta correcta es " + lista[numeroPregunta-1];
    imprimir(mensaje2, "mostrarrespuesta"+numeroPregunta);

}

let respuetas = ["B","C","A"]

function mostrarrespuesta(numeroPregunta) {
    let respuestaCorrecta = lista[numeroPregunta-1];
    let mensaje = "La respuesta correcta es " + respuestaCorrecta;
    imprimir(mensaje,"mostrarRespuesta"+numeroPregunta);
}
    

