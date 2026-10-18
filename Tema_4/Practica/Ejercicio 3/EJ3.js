function menosRepeticiones(numeros) {
    let conteo = {};

    for (let num of numeros) {
        conteo[num] = (conteo[num] || 0) + 1;
    }

    let resultado = numeros[0];
    let minRepeticiones = conteo[resultado];

    for (let num of numeros) {
        if (conteo[num] < minRepeticiones || (conteo[num] === minRepeticiones && num < resultado)) {
            minRepeticiones = conteo[num];
            resultado = num;
        }
    }

    return resultado;
}

console.log(menosRepeticiones([4, 4, 2, 2, 3, 5])); 