let ang = 80;
let ang2 = 60;
let ang3 = 40;

let soma = ang + ang2 + ang3;
let somaPositivo = ang > 0 && ang2 > 0 && ang3 > 0;

if(somaPositivo){
    if (soma === 180){
            console.log('true');
        }else {
            console.log('false');
        };    
    
}else{
    console.log('Inválido');
}