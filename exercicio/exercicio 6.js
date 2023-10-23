const Input = require('readline-sync')

var base, altura

base = parseFloat(Input.question(`Informe á base: `))
altura = parseFloat(Input.question(`Informe á altura: `))

console.log(`O volume é ${altura * base / 2} cm`)