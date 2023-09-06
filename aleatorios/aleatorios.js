numeroAleatorio = function(){
    let numero = Math.floor((Math.random() * 100) + 1);
    return numero    
}
generarAleatorios = function(){
    let aleatorios = [];
    let numero = recuperarInt('txtNumero');
    if (numero >= 5 && numero <= 20 ) {
        for (let i = 0; i < numero; i++) {
            let aleatorio = numeroAleatorio();
            aleatorios.push(aleatorio);
            console.log('valor indice ' + i);
        }
    }else{
        alert('EL NUMERO DEBE SER ENTRE 5 Y 20');
    }
    console.log('[]' + aleatorios);
    mostrarResultados(aleatorios);

}
mostrarResultados = function(arregloNumeros){
    let cmpTabla = document.getElementById('divTabla');
    let contenido = "";
    contenido = "<table><tr><th>NUMERO</th></tr>";
    for (let i = 0; i < arregloNumeros.length; i++) {
        let fila = "<tr><td>"+arregloNumeros[i]+"</td></tr>";
        contenido += fila;
    }
    contenido += "</table>";
    cmpTabla.innerHTML = contenido;
}
examen = function(){
    let arr = [];
    arr.push(1);
    arr.push(2);
    arr.push(3);
    console.log(arr.length);
    arr.push('as');
    arr.push('w');
    console.log(arr.length);
    let array = [1,2,3,4,5];
    let ultimo = array.length;
    console.log('asd' + array[ultimo]);
}
