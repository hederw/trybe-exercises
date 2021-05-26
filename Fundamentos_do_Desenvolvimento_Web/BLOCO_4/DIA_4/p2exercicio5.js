function repetMais(array){
    let mais = array[0];
    for(let index in array){
        if(mais == array[index]){
            mais = array[index]
        }
    }
    return mais;
}

console.log(repetMais([2, 3, 2, 5, 8, 2, 3]));