//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

//PASO 0
esMayuscula = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii>=65 && ascii <= 90) {
        return true;
    } else {
        return false;
    }
}

//PASO 1
let palabraSecreta='';
let mayuscula = 0;
guardarPalabra = function(){
    palabraSecreta = recuperarTexto('txtSecreta');
    if (palabraSecreta.length != 5) {
        alert('PASSWORD DEBE TENER 5 CARACTERES');
    }
    for (let i = 0; i < palabraSecreta.length-1; i++) {
        let caracter = palabraSecreta.charAt(i);
        if (esMayuscula(caracter) == false) {
            mayuscula += 1; 
        }
    }
    if (mayuscula>0) {
           alert('LOS CARACTERES DEBEN SER MAYUSCULAS');
    }
    mayuscula = 0 ;
}

//PASO 2
mostrarLetra = function(letra,posicion){
    let cmpDiv = 'div'+posicion;
    mostrarTexto(cmpDiv,letra);
}

//PASO 3 
let letrasEncontradas;
validar = function(letra){
    for (let i = 0; i < palabraSecreta.length-1; i++) {
        let caracter = palabraSecreta.charAt(i);       
        if (letra == caracter) {
            mostrarLetra(letra,i);
            letrasEncontradas += 1;         
        }
    }
}
ingresarLetra = function(){
    let letra = recuperarTexto('txtLetra');
    if (esMayuscula(letra)) {
        validar(letra);
    }else{
        alert('SOLO SE ACEPTAN MAYUSCULAS');
        }
}