const prompt = require('prompt-sync')(); 

const palavra = prompt("Digite a palavra: ");
const letra = prompt("Digite a letra para contar: ");


if (letra.length !== 1) {
    console.log("Por favor, digite apenas um caractere para a letra.");
} else {
    let contador = 0;


    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            contador++;
        }
    }


    console.log(`A letra '${letra}' aparece ${contador} vezes na palavra '${palavra}'.`);
}
