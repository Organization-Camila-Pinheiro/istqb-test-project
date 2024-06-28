listaRespuesta = ["C", "C", "A", "B", "C", "A", "C", "A", "B", "C"]
listaRanking = []

function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id)
    parrafo.innerText = mensaje
}

function bienvenida() {
    let nombre = document.getElementById("nombre1").value;

    let mensaje = "Hola " + nombre + ", sea bienvenida al examen de ISTQB! Que hagas un buen examen!";
    imprimir(mensaje, "welcome1");
}

function showAnswer(numeroPregunta) {
    let answer = listaRespuesta[numeroPregunta -1];
    let mensaje = "La respuesta correcta es la " + answer;
    imprimir(mensaje, "respuesta" + numeroPregunta);
}

function correctAnswer(numeroPregunta) {

    let answerCorrect = listaRespuesta[numeroPregunta - 1];
    let emptyAnswer = ""
    let answerStudent = document.getElementById("pregunta" + numeroPregunta).value;
    let mensaje = ""
    let score = 0

    if (answerStudent === emptyAnswer) {
        score = 0
        mensaje = "Respuesta equivodada! Puntuación: " + score;

    }
    else if (answerStudent === answerCorrect) {
        score = 2
        mensaje = "Respuesta correcta! Puntuación: " + score;
    }

    else if (answerStudent !== answerCorrect) {
        score = -1
        mensaje = "Respuesta equivodada! Puntuación: " + score;
    }

    imprimir(mensaje, "corrigir" + numeroPregunta);
    return score
}

let sumaTotal = 0

function sumaPuntos() {
    let sumaTotal = 0
    let mensaje = ""

    for (let i = 1; i <= 10; i++) {
        let score = correctAnswer(i)
        sumaTotal += score
        mensaje = "Su pontuación final es " + sumaTotal
    }

    imprimir(mensaje, "pontuacionFinal")
    
}


function ranking() {
    let student = {}
    student.nombre = document.getElementById("nombre1").value;
    student.notaFinal = sumaTotal;
    listaRanking.push(student);
    listaRanking.sort((a,b) => b.notaFinal - a.notaFinal )

    let mensaje = "";
    for (i = 0; i<listaRanking.length; i++) {
        let studentRanking = listaRanking[i]
        mensaje += " Nombre: " + listaRanking[i].nombre;
        mensaje += " Pontuación final: " + listaRanking[i].notaFinal;
    }

    imprimir(mensaje, "ranking1")
    
}




