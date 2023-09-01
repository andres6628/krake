calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert('Error nota 1');
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert('Error nota 2');
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert('Error nota 3')
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);
            }
        }

    }
}


calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeEror = false;

    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");

    if (esNotaValida(nota1, 'lblError1') & esNotaValida(nota2, 'lblError2') & esNotaValida(nota3, 'lblError3')) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }
}
esNotaValida = function (nota, idComponenteError) {
    let hayErrores = false;
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, 'Debe ingresar un número');
        hayErrores = true;
    }
    if (nota < 0 || nota > 10) {
        mostrarTexto(idComponenteError, 'Nota entre 0 a 10');
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, '')
    }
    return !hayErrores;

}