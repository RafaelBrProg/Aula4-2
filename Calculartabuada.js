const prompt = require("prompt-sync")()
const numero = Number(prompt("Digite seu numero"))

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);

}
