let divisor = 1;
let verificaPrimo = 3;



for (let primo = 2; primo <= verificaPrimo; primo += 1) {
    if (verificaPrimo % primo === 0) {
    divisor += 1;
    }
}

if (divisor === 2) {
    console.log(verificaPrimo + ' é primo');
}
else {
    console.log(verificaPrimo + ' não é primo');
}