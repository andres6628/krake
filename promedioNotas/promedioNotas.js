calcularPromedioNotas = function(){
    let n1 = parseFloat(document.getElementById('txtNota1').value)
    let n2 = parseFloat(document.getElementById('txtNota2').value)
    let n3 = parseFloat(document.getElementById('txtNota3').value)

    let promedio = calcularPromedio(n1,n2,n3)
    mostrarTexto('lblPromedio',promedio)
}