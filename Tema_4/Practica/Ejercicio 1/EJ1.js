function contarVocales(cadena) {
    let contador = 0;
    const vocales = "aeiou";

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}


console.log(contarVocales("hola mundo")); 