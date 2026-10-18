function sinDuplicados(lista) {
    let unicos = [];

    for (let i = 0; i < lista.length; i++) {
        if (!unicos.includes(lista[i])) {
            unicos.push(lista[i]);
        }
    }
    return unicos;
}


console.log(sinDuplicados([1, "hola", 2, 1, "hola", 3])); 