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
let palabraSecreta;
let mayuscula = 0;
guardarPalabra = function(){
    let palabra = recuperarTexto('txtSecreta');
    if (palabra.length != 5) {
        alert('PASSWORD DEBE TENER 5 CARACTERES');
    }
    for (let i = 0; i < palabra.length-1; i++) {
        let caracter = palabra.charAt(i);
        if (esMayuscula(caracter) == false) {
            mayuscula += 1; 
        }
    }
    if (mayuscula>0) {
           alert('LOS CARACTERES DEBEN SER MAYUSCULAS');
    }
    mayuscula = 0 ;
}


