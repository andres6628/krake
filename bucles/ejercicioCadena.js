ejecutarPruebaUno = function() {
    let cadena = document.getElementById('idCadena').value;
    recorrerCadena(cadena);
}

recorrerCadena = function(cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log('CARACTER' + caracter+ ' POSICION ' + posicion);
        
    }
    for (let posicion = 0; posicion <= cadena.length-1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log('CARACTER ' + caracter + ' POSICION '+posicion);
    }
}

ejecutarPruebaDos = function(){
    let cadena = recuperarTexto('idCadena');
    let resultado = invertirCadena(cadena);
    mostrarTexto('idInvertida',resultado);
}
invertirCadena = function(cadena){
    let caracter;
    let resultado = '';
    for (let i = cadena.length -1 ; i >= 0 ; i--) {
        caracter = cadena.charAt(i);
        console.log(resultado);
        resultado = resultado + caracter;
    }
   console.log(resultado);
    return resultado;
}

buscarLetra = function(cadena,letra){
    let letraIterada;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (letraIterada == letra) {
            existeLetra = true;
        }
    }
    if (existeLetra) {
        console.log('existe');
    }else{
        console.log('no existe');
    }
}
contarMayusculas = function(cadena) {
    let letra ;
    let contadorMayuscula = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (esMayuscula(cadena.charAt(i))) {
            contadorMayuscula = contadorMayuscula + 1;
        }
    }
}