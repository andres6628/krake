mostrarNumeros = function(){
    console.log('antes del for');

    for(let i=0;i<4;i++){
        console.log(i);
    }

    console.log('despues del for');
}
mostrarNumeros2 = function(){
    console.log('antes del for');
    for (let indice = 1; indice <=5; indice++) {
        console.log(indice);
    }
    console.log('despues del for');
}
mostrarPares = function(){
    console.log('antes del for');
    for(let x = 0; x<10;x+=2){
        console.log(x);
    }
    console.log('despues del for');
}
mostrarInverso = function(){
    console.log('antes del for');
    for(let x = 10; x>=0 ; x--){
        console.log(x);
    }
    console.log('despues del for');
}
hackearNasaPelis = function() {
    for (let porcentaje = 0; porcentaje <=100; porcentaje+=10) {
        console.log('hackeando la nasa '+porcentaje+'%');        
    }
    console.log('LA NASA HA SIDO HACKEADA');
}
mostrarImpares = function(){
    console.log('antes del for');
    for (let i = 3; i < 21; i+=2) {
        console.log(i+' es impar');        
    }
    console.log('despues del for');

}