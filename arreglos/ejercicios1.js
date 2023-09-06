let notas = [];
agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo =function(){
    let notaR;
    for (let i = 0; i < array.length; i++) {
        notaR = notas[i];
        console.log(notaR);
    }
}
probarAgregar = function(){
    let notaRecuperada = recuperarInt('txtNota');
    agregarNota(notaRecuperada);
}
agregarNota = function(nota){
    notas.push(nota);
    mostrarNotas();
}
calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio ; 

    for (let i = 0; i < notas.length; i++) {
        sumaNotas = sumaNotas + notas[i];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}
ejecutarPromedio = function(){
    let promedio = calcularPromedio();
    mostrarTexto('txtPromedio',promedio);
}
generarTabla = function(){
    let contenidoTabla = '';
    let cmpTabla = document.getElementById('divTabla');

    contenidoTabla += "<table><tr><td>UNO</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}
mostrarNotas = function(){
    let cmpTabla = document.getElementById('divTabla');
    let contenidoTabla = "<table><thead><th>NOTA</th></thead>";
    let miNota;
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</td></tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}