let custo = 100;
let valorVenda = 180;

if (custo >= 0 && valorVenda >= 0){
    let valorCustoTotal = custo * 1.2;
    let valorLucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(valorLucro);
} else {
  console.log("Error, os valores não podem ser negativos");
};
