jugar = function(){
   let aleatorio =  lanzarDado()
   cambiarTexto('lblNumero',aleatorio)
   if (aleatorio>3) {
    cambiarTexto('lblMensaje','GANASTE ES MAYOR A TRES')
    console.log('GANASTE ES MAYOR A TRES');
   }else{
    cambiarTexto('lblMensaje','PERDISTE ES MENOR A TRES')
    console.log('PERDISTE ES MENOR A TRES');
   }
}
lanzarDado = function(){
    let aleatorio
    let numeroMultiplicado
    aleatorio = Math.random()
    numeroMultiplicado = aleatorio * 6
    console.log(numeroMultiplicado);
    let numeroEntero = parseInt(numeroMultiplicado)
    let valorDado = numeroEntero + 1
    console.log('--->' + valorDado);
    return valorDado
}