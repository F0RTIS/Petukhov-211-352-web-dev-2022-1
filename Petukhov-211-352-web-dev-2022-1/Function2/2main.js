function countnumbers (arr){
    let samesymbols = new Map();
    uniques = Array.from(new Set(arr));
    for (let i = 0; i < uniques.length; i++) {
        samesymbols.set(uniques[i], 0);
    }
    for (let z = 0; z < uniques.length; z++) {
        samesymbols.set(arr[z], samesymbols.get(arr[z]) + 1);
    }
    for (let [key, value] of samesymbols) {
        if (value < 2) {
            samesymbols.delete(key);
        }
    }
    return samesymbols;
}
console.log(countnumbers([1, 2, 2, 6, 7, 9, 11, 3, 1, 5]));
