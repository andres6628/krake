esMayuscula = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii>=65 && ascii <= 90) {
        return true;
    } else {
        return false;
    }
}
esDigito = function(caracter) {
    let ascii = caracter.charCodeAt(0);
    if ((ascii >= 48 && ascii <= 57) || isNaN(ascii)) {
        return true;
    } else {
        return false;
    }
}
esGuion = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii == 45) {
        return true;
    } else {
        return false;
    }
}