function arrayDiff(a, b) {
    return a.filter(elemento => !b.includes(elemento));
}


console.log(arrayDiff([1, 2], [1]));          
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); 