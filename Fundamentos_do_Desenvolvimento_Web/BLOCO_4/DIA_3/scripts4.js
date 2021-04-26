let n = 5;

let simbolo = '*';
let imprimeLinha = '';

let posicaoMeio = (n + 1) / 2;// encontra o meio de n para posicionar o asterisco
let posicaoDir = posicaoMeio;//controla o lado direito a partir do meio
let posicaoEsq = posicaoMeio;// controla o lado esquerdo a partir do meio

//a linha é impressa de acordo com o meio da pirâmide, não é mais relacionda a n
for (let indexLinha = 0; indexLinha <= posicaoMeio; indexLinha += 1) {

  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    
        //imprime caso coluna e posição
        if (indexColuna > posicaoEsq && indexColuna < posicaoDir) {
            imprimeLinha += simbolo;
        } else {
            imprimeLinha +=  ' ';
        }
  }
  console.log(imprimeLinha);
  imprimeLinha = '';
  posicaoDir += 1;// aumenta de um em um pra direita
  posicaoEsq -= 1//diminui de um em um pra esquerda
};


