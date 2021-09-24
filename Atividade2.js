const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Há quantos alunos? ', (numero) => {
    for (let index = 0; index <= (numero); index++){
        if (index == 0){ 
            console.log("O número é Zero " + index)
        }
        else if ((index % 2) == 0) {
            console.log("O numero é par " + index)
            }
        else {
            console.log("O numero é ímpar " + index)
            }
    }
});