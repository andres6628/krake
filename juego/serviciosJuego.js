obtenerAleatorio = function() {
    let numero = Math.random() * 3;
    numero = parseInt(numero);
    return numero;
}
generarElemento = function(){
    let numero = obtenerAleatorio();
    if (numero == 1 ) {
        return 'piedra';
    }
    if (numero == 2) {
        return 'papel';
    }else{
        return 'tijera';
    }
}
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == 'piedra' && eleccionJugador2 == 'piedra') {
        return 0;
    }
    if (eleccionJugador1 == 'piedra' && eleccionJugador2 == 'papel') {
        return 2;
    }
    if (eleccionJugador1 == 'piedra' && eleccionJugador2 == 'tijera') {
        return 1;
    }

    if (eleccionJugador1 == 'papel' && eleccionJugador2 == 'piedra') {
        return 1;
    }
    if (eleccionJugador1 == 'papel' && eleccionJugador2 == 'papel') {
        return 0;
    }
    if (eleccionJugador1 == 'papel' && eleccionJugador2 == 'tijera') {
        return 2;
    }

    if (eleccionJugador1 == 'tijera' && eleccionJugador2 == 'piedra') {
        return 2;
    }
    if (eleccionJugador1 == 'tijera' && eleccionJugador2 == 'papel') {
        return 1;
    }
    if (eleccionJugador1 == 'tijera' && eleccionJugador2 == 'tijera') {
        return 0;
    }
}
generarRuta = function(nombre){
    if (nombre == 'piedra') {
        return './imagenes/piedra.png';
    }
    if (nombre == 'papel') {
        return './imagenes/papel.png';
    }else{
        return './imagenes/tijera.png';
    }
}