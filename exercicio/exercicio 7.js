const Input = require('readline-sync')

var velocidade, tempo, distancia

distancia = 435
velocidade = parseFloat(Input.question('Informe a sua velocidade: ')) / 3,6

tempo = distancia / velocidade 

console.log(`Na velocidade de ${velocidade, toFixed(2)} m/s levará o tempo ${tempo / 3600} h`)
