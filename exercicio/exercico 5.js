const input = require('readline-sync')

var altura, largura, profundidade, volume

altura = parseFloat(input.question('Informe á altura: '))
largura = parseFloat(input.question('Informe á largura: '))
profundidade = parseFloat(input.question('Informe á profundidade: '))

console.log(`O volume é ${altura * largura * profundidade} cm`)