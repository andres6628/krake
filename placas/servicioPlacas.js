validarEstructura = function (placa) {
    let msjError = '';
    if (placa.length == 7 | placa.length == 8) {

        if (esMayuscula(placa.charAt(0)) == false) {
            msjError = msjError + ' 1er caracter no es una mayúscula, ';
        }
        if (esMayuscula(placa.charAt(1)) == false) {
            msjError = msjError + ' 2do caracter no es una mayúscula, ';
        }
        if (esMayuscula(placa.charAt(2)) == false) {
            msjError = msjError + ' 3er caracter no es una mayúscula, ';
        }
        if (esGuion(placa.charAt(3)) == false) {
            msjError = msjError + ' 4to caracter no es un guión, ';
        }
        if (esDigito(placa.charAt(4)) == false) {
            msjError = msjError + ' 5to caracter no es un dígito, ';
        }
        if (esDigito(placa.charAt(5)) == false) {
            msjError = msjError + ' 6to caracter no es un dígito, ';
        }
        if (esDigito(placa.charAt(6)) == false) {
            msjError = msjError + ' 7mo caracter no es un dígito, '
        }
        if (placa.charAt(7) != '') {
            if (esDigito(placa.charAt(7)) == false) {
                msjError = msjError + ' 8vo caracter no es un dígito'
            }
        }
        return msjError;
    } else {
        msjError = msjError + 'Longitud de placa incorrecta ';
        return msjError;
    }
}
obtenerProvincia = function (placa) {
    let charProvincia = placa.charAt(0);
    if (charProvincia == 'A') {
        return 'Azuay';
    }
    if (charProvincia == 'B') {
        return 'Bolívar';
    }
    if (charProvincia == 'U') {
        return 'Cañar';
    }
    if (charProvincia == 'C') {
        return 'Carchi';
    }
    if (charProvincia == 'X') {
        return 'Cotopaxi';
    }
    if (charProvincia == 'H') {
        return 'Chimborazo';
    }
    if (charProvincia == 'O') {
        return 'El Oro';
    }
    if (charProvincia == 'E') {
        return 'Esmeraldas';
    }
    if (charProvincia == 'W') {
        return 'Galápagos';
    }
    if (charProvincia == 'G') {
        return 'Guayas';
    }
    if (charProvincia == 'I') {
        return 'Imbabura';
    }
    if (charProvincia == 'L') {
        return 'Loja';
    }
    if (charProvincia == 'R') {
        return 'Los Ríos';
    }
    if (charProvincia == 'M') {
        return 'Manabí';
    }
    if (charProvincia == 'V') {
        return 'Morona Santiago';
    }
    if (charProvincia == 'N') {
        return 'Napo';
    }
    if (charProvincia == 'S') {
        return 'Pastaza';
    }
    if (charProvincia == 'P') {
        return 'Pichincha';
    }
    if (charProvincia == 'K') {
        return 'Sucumbíos';
    }
    if (charProvincia == 'Q') {
        return 'Orellana';
    }
    if (charProvincia == 'T') {
        return 'Tungurahua';
    }
    if (charProvincia == 'Z') {
        return 'Zamora Chinchipe';
    }
    if (charProvincia == 'Y') {
        return 'Santa Elena';
    } else {
        return null;
    }
}
obtenerTipoVehiculo = function (placa) {
    let charVehiculo = placa.charAt(1);
    if (esMayuscula(charVehiculo)) {
        if (charVehiculo == 'A' || charVehiculo == 'Z') {
            return 'Vehículo comercial';
        }
        if (charVehiculo == 'E') {
            return 'Vehículo gubernamental';
        }
        if (charVehiculo == 'X') {
            return 'Vehículo de uso oficial';
        }
        if (charVehiculo == 'S') {
            return 'Vehículo del gobierno provincial';
        }
        if (charVehiculo == 'M') {
            return 'Vehículo municipal';
        } else {
            return 'Vehículo particular';
        }
    } else {
        return 'Vehículo incorrecto';
    }

}
obtenerDiaPicoYPlaca = function (placa) {
    let charPicoPlaca = placa.charAt(placa.length - 1);
    if (charPicoPlaca == 1 || charPicoPlaca == 2) {
        return 'Lunes';
    }
    if (charPicoPlaca == 3 || charPicoPlaca == 4) {
        return 'Martes';
    }
    if (charPicoPlaca == 5 || charPicoPlaca == 6) {
        return 'Miércoles';
    }
    if (charPicoPlaca == 7 || charPicoPlaca == 8) {
        return 'Jueves';
    }
    if (charPicoPlaca == 9 || charPicoPlaca == 0) {
        return 'Viernes';
    }
}