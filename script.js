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
    
    

