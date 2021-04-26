let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';

  for (let col = 1; col <= n; col += 1) {

        //imprime o asterisco a aprtir do meio, se coluna for igua lado direito, esquerdo ou linha igual meio, imprime o asterisco, caso contrario imprime um espaço
        if (col == controlLeft || col == controlRight || line == middle) {
        outputLine += symbol;
        } else {
        outputLine += ' ';
        }

  }

  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}