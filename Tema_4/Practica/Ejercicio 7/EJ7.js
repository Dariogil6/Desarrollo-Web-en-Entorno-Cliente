function encontrarIndiceEquilibrio(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sumaIzquierda = 0;
        let sumaDerecha = 0;

        for (let j = 0; j < i; j++) {
            sumaIzquierda += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            sumaDerecha += arr[k];
        }

        if (sumaIzquierda === sumaDerecha) {
            return i;
        }
    }
    return -1;
}

console.log(encontrarIndiceEquilibrio([1, 2, 3, 4, 3, 2, 1])); 
console.log(encontrarIndiceEquilibrio([1, 100, 50, -51, 1, 1])); 
console.log(encontrarIndiceEquilibrio([20, 10, -80, 10, 10, 15, 35])); 