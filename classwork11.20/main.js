function bubblesort (mass) {
    let f;

    for (let a = mass.length - 1; a>=0; a--){
        for (let i =0; i<a;i++) {
            if (mass[i] > mass[i+1]){
                f = mass[i];
                mass[i] = mass[i+1];
                mass[i+1] = f;
            } 
        }
    }
    return mass;
}

console.log(bubblesort([3,1,7,5]));