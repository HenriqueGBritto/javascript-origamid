// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 21
var idadePai = 62

if(minhaIdade < idadePai) {
    console.log('Pai é mais velho!')
} else if(minhaIdade === idadePai) {
    console.log('nossa idade é a mesma!')
} else {
    console.log('sou mais velho que meu pai')
}

// Qual valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao) // retorna o valor de 3, que é o ultimo valor verdadeiro

// Verifique se as seguintes variáveis são Truthy ou Falsy

var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('brasil mais habitantes')
} else {
    console.log('china mais habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}