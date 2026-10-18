function validarPin(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }

    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }
    return true;
}

// Pruebas
console.log(validarPin("1234"));  
console.log(validarPin("12345")); 
console.log(validarPin("a234"));  