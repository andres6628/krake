calcularPromedioNotas = function(){
    let n1 = parseFloat(document.getElementById('txtNota1').value);
    let n2 = parseFloat(document.getElementById('txtNota2').value);
    let n3 = parseFloat(document.getElementById('txtNota3').value);

    let promedio = calcularPromedio(n1,n2,n3);
    promedio = promedio.toFixed(2)
    mostrarTexto('lblPromedio',promedio);
    if (promedio > 0 && promedio < 5 ) {
        mostrarTexto('msjProm','REPROBADO');
        mostrarImagen('imgPromedio','imagenes/reprobado.gif');
    } else 
    if(promedio >=5 && promedio <= 8){
        mostrarTexto('msjProm','BUEN TRABAJO');
        mostrarImagen('imgPromedio','imagenes/200w.gif');

    }else 
    if(promedio >8 && promedio<=10){
        mostrarTexto('msjProm','EXCELENTE');
        mostrarImagen('imgPromedio','imagenes/excelente.gif');
    }else{
        mostrarTexto('msjProm','DATOS INCORRECTOS')
        mostrarImagen('imgPromedio','imagenes/incorrecto.gif')
    }
}