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