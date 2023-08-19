calcularPromedioNotas = function(){
    let n1 = parseFloat(document.getElementById('txtNota1').value);
    let n2 = parseFloat(document.getElementById('txtNota2').value);
    let n3 = parseFloat(document.getElementById('txtNota3').value);

    let promedio = calcularPromedio(n1,n2,n3);
    promedio = promedio.toFixed(2)
    mostrarTexto('lblPromedio',promedio);
    if (promedio > 7) {
        mostrarImagen('imgPromedio','imagenes/200w.gif');
    } else {
        mostrarImagen('imgPromedio','imagenes/reprobado.gif');
    }
}