listaRespuesta = ["C", "C", "A", "B", "C", "A", "C", "A", "B", "C"]


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
    let mensaje = ""

    for (let i = 1; i <= 10; i++) {
        let score = correctAnswer(i)
        sumaTotal += score
        mensaje = "Su pontuación final es " + sumaTotal
    }

    imprimir(mensaje, "pontuacionFinal")
    ranking()
    
}


function ranking() {
    listaRanking = []
    let students = {}
    students.nombre = document.getElementById("nombre1").value;
    students.notaFinal = sumaTotal;
    listaRanking.push(students);
    //let mensaje1 = " lista " + listaRanking

    let mensaje = "";
    for (i = 0; i<listaRanking.lenght; i++) {
        mensaje += "Estudiente número: " [i];
        mensaje += "Nombre " + students[i].nombre;
        mensaje += "Pontuación final " + students[i].notaFinal;
    }
    imprimir(mensaje, "ranking1")

}


/** function mostrarArray() {
    let mensaje = "";
    for (i = 0; i < listaRanking.lenght; i++) {
        mensaje += "Nombre " + students[i].nombre;
        mensaje += "Pontuación final " + students[i].notaFinal;
        console.log(mensaje)
    }
    imprimir(mensaje, "ranking1")

} */


