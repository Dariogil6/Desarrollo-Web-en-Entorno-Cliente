function persistencia(num) {
    let pasos = 0;

    while (num >= 10) {
        let digitos = num.toString();
        let multiplicacion = 1;

        for (let i = 0; i < digitos.length; i++) {
            multiplicacion *= Number(digitos[i]);
        }

        num = multiplicacion;
        pasos++;
    }
    return pasos;
}

console.log(persistencia(39));  
console.log(persistencia(999));
console.log(persistencia(4));   