let puntosUsuarios = 0;
let puntosComputador = 0;


jugar = function (seleccionado) {

    let elemento = generarElemento();
    let imagen = generarRuta(elemento);
    let ganador = determinarGanador(seleccionado, elemento);

    let cmpResultado = document.getElementById('resultado');
    let cmpPuntosJug = document.getElementById('puntosJug');
    let cmpPuntosPc = document.getElementById('puntosPc');
    let cmpPartida = document.getElementById('partida');
    cmpPartida.innerText = '';

    let cmpImgPc = document.getElementById('imgPc');

    cmpImgPc.src = imagen;

    if (ganador != 0) {
        if (ganador == '1') {
            cmpPartida.innerText = 'Ganaste la partida';
            puntosUsuarios += 1;
            cmpPuntosJug.innerText = puntosUsuarios

            if (puntosUsuarios == 5) {
                cmpResultado.innerText = 'HAS GANADO EL JUEGO';
            }
        } else {
            cmpPartida.innerText = 'Perdiste la partida';
            puntosComputador += 1;
            cmpPuntosPc.innerText = puntosComputador;
            if (puntosComputador == 5) {
                cmpResultado.innerText = 'EL COMPUTADOR TE HA VENCIDO';
            }
        }
    } else {
        cmpPartida.innerText = 'EMPATE';
    }

}

limpiarDatos = function () {
    let cmpResultado = document.getElementById('resultado');
    let cmpPuntosJug = document.getElementById('puntosJug');
    let cmpPuntosPc = document.getElementById('puntosPc');
    let cmpPartida = document.getElementById('partida');
    let cmpImgPc = document.getElementById('imgPc');

    puntosComputador = 0;
    puntosUsuarios = 0;

    cmpPuntosJug.innerText = '0';
    cmpPuntosPc.innerText = '0';
    cmpPartida.innerText = '';
    cmpImgPc.src = './imagenes/incognito.png';
    cmpResultado.innerText = '';


}