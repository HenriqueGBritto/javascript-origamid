//some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000

scroll += 500

console.log(scroll)

//atribua true para a variável darCredito, caso o cliente possua carro e casa, e false caso o contrário

var possuiCarro = true
var possuiCasa = true
var darCredito

var darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito ao cliente' : 'Negar crédito ao cliente' 

console.log(darCredito)