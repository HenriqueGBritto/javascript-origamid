// const comida = 'Pizza'
// const agua = new String('Agua  ')

// console.log(agua.length)

// const frase = 'A melhor comida'

const frase = 'A melhor linguagem é '
const linguagem = 'JavaScript'

const fraseFinal = frase.concat(linguagem, '!!', 'Oi')

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 4))
console.log(fruta.startsWith('Ba'))
console.log(fruta.endsWith('Na'))

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

const linguagem2 = 'JavaScript';
linguagem2.substring(3,5); // aS
linguagem2.substring(0,4); // Java
linguagem2.substring(4); // Script
linguagem2.substring(-3); // JavaScript

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

// listaPrecos[0].padStart(10, '.'); // .....R$ 99
// listaPrecos[0].padEnd(10, '.');   // R$ 99.....

const frase2 = 'Ta';

frase2.repeat(5); // TaTaTaTaTa

// STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

// STR.SPLIT(PADRAO)
// Divide a string de acordo com o padrão passado e retorna uma array.

console.log(listaItens)
const arrayLista = listaItens.split('s, ')

console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('saldkfjlaskjdflkasdjf');

const frutasArray = ['banana', 'melancia', 'laranja']

console.log(htmlText)
console.log(htmlArray)

// STR.TOLOWERCASE() E STR.TOUPPERCASE()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
// Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
