let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length)//verifica se há um próximo valor 
  {
    novo.push(numbers[index] * numbers[index + 1]); //multiplica valor atual pelo próximo
  } else {
    novo.push(numbers[index] * 2);// quando não tem próximo valor multiplica por 2
  }
}

console.log(novo);