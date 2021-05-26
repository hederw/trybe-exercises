let n = 5;
let simbolo = '*';

let posicao = n; //controla a posição coluna onde os asteriscos serão impressos em cada linha
let imprimeLinha = '';

for(let line = 0; line < n; line +=1){

    for(let coluna = 0; coluna <= n; coluna +=1){
        
        if(coluna < posicao){
            imprimeLinha += ' '; 
        }else{

            imprimeLinha += simbolo;
        }
    }
console.log(imprimeLinha);
imprimeLinha = '';//zera para proxima linha
posicao -= 1;//para que na proxima repetição imprime o asteristico uma posição antes
    
}