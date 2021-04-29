function repetMais(array){
    let mais = 0;
    for(let index in array){
        if(array[mais] > array[index]){
            mais = index;
        }
    }
    return mais;
}

console.log(repetMais([2, 4, 6, 7, -10, 0, -3]));