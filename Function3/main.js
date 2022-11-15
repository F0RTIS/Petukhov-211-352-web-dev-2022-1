function matrixMin(arr, par) {
        let min;
        let max;
        min = max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
            if (arr[i] > max) max = arr[i];
        }
 
    if (par == "min") {
        return min;
    }
    else  if (par == "max") {   
        return max;
    }
}

function classwork(matr) {
   let temp = [];
   for (let i = 0; i<matr.length; i++) {
        temp.push(matrixMin( matr[i] , "min"));
    } 
   return matrixMin(temp, "max");
}



let matr = [
    [2, 3, 5],
    [1, 7, 6],
    [3, 9, 4],
    [6, 2, 3],
];


console.log(classwork(matr));