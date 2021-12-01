var nome = 'André';
var idade = 28;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, nome)


var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco)

var sobrenome = 'Rafel', cidade = 'Rio';

console.log(sobrenome, cidade);

var semDefinir;

console.log(semDefinir);

// console.log(aindaNaoDefine);
var comida;

console.log(comida);

comida = 'Pizza'; //sofre hoisting - o proprio js "envia" o var comida para antes do console.log, porém sem o valor atribuido, assim a variavel passa a existir (só acontece com variaveis do tipo var)

let time = 'Vasco';
time = 'Flamengo';

console.log(time);


