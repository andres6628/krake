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
    }
    console.log('[]' + aleatorios);
    mostrarResultados(aleatorios)
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