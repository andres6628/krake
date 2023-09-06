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

let intentos = 0;
let conincidencias = 0;
let errores = 0;

validar = function(letra){
    let letrasEncontrada = false;
    for (let i = 0; i < palabraSecreta.length; i++) {
        let caracter = palabraSecreta.charAt(i);       
        if (letra == caracter) {
            mostrarLetra(letra,i);
            letrasEncontradas += 1;
            conincidencias += 1; 
            letrasEncontrada = true;        
        }else{
            errores += 1;
            letrasEncontrada = false;
        }
    }
    if (letrasEncontrada == false) {
        alert('LA LETRA NO ES PARTE DE LA PALABRA');
    }
    intentos += 1;
}
ingresarLetra = function(){
    let letra = recuperarTexto('txtLetra');
    if (esMayuscula(letra)) {
        validar(letra);
        if (conincidencias == 5) {
            alert('HAS GANADO');
        }
        if (intentos == 10) {
            alert('HA PERDIDO');
        }
    }else{
        alert('SOLO SE ACEPTAN MAYUSCULAS');
        }
}
mostrarAhorcado = function(){
    if (errores == 1) {
        mostrarImagen('ahorcadoImagen','Ahorcado_01.png');
    }
    if (errores == 2) {
        mostrarImagen('ahorcadoImagen','Ahorcado_02.png');
    }
    if (errores == 3) {
        mostrarImagen('ahorcadoImagen','Ahorcado_03.png');
    }
    if (errores == 4) {
        mostrarImagen('ahorcadoImagen','Ahorcado_04.png');
    }
    if (errores == 5) {
        mostrarImagen('ahorcadoImagen','Ahorcado_05.png');
    }
    if (errores == 6) {
        mostrarImagen('ahorcadoImagen','Ahorcado_06.png');
    }
    if (errores == 7) {
        mostrarImagen('ahorcadoImagen','Ahorcado_07.png');
    }
    if (errores == 8) {
        mostrarImagen('ahorcadoImagen','Ahorcado_08.png');
    }
    if (errores == 9) {
        mostrarImagen('ahorcadoImagen','Ahorcado_09.png');
    }
    
}