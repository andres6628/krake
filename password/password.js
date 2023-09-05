validarPassword = function (password) {
    let errores='';
    let digitos = 0;
    let mayusculas = 0;
    let caracteres = 0;
    if (password.length < 8) {
        errores = 'La contraseña debe tener mínimo 8 caracteres';
    }
    if (password.length > 16) {
        errores = 'La contraseña debe tener máximo 16 caracteres';
    }

    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);
        
           if (esMayuscula(caracter)) {
            mayusculas += 1;
           }
           if (esDigito(caracter)) {
            digitos += 1;
           }
           if (esCaracter(caracter)) {
            caracteres += 1;
           }     
    }
    if (mayusculas == 0) {
        errores = errores + ', ' + 'Debe tener al menos una letra mayúscula ';
    }
    if (digitos == 0) {
        errores = errores + ', ' + 'Debe tener al menos un dígito ';
    }
    if (caracteres == 0) {
        errores = errores + ', ' + 'Debe tener al menos un caracter especial (* , - , _ ) ';
    }
    
    return errores;
}
ejecutarValidacion = function () {
    let password = document.getElementById('idPassword').value;
    let errores = validarPassword(password);
    mostrarTexto('idError',errores);
}