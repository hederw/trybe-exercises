let notas = 70;

if(notas < 0 || notas > 100){
    console.log('Erro, Nota inválida');
}else if(notas >= 90){
    console.log('A');
}else if(notas >= 80){
    console.log('B');
}else if(notas >= 70){
    console.log('C');
}else if(notas >= 60){
    console.log('D');
}else if(notas >= 50){
    console.log('E');
}else{
    console.log('F');
}