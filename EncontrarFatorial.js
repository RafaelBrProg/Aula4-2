const prompt = require("prompt-sync")()
const fatorial = Number(prompt("Digite seu numero"));

var resultado = fatorial;
for (let i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado); 