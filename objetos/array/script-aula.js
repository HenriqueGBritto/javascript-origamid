// ARRAYS
/*
// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.


// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];


const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang
carros[2] = 'Kia';
carros[10] = 'Passat';
carros[25] = 'Civic'
console.log(carros.length); // 11

// ARRAY.FROM()
// Array.from() é um método utilizado para transformar array-like objects, em uma array.

const li = document.querySelectorAll('li')

const arrayLi = Array.from(li)

const obj = {
    0: 'Andre',
    1: 'Rafael',
    2: 'Kbida',
    length: 3
}

const objArray = Array.from(obj)

// ARRAY.ISARRAY()
// Verifica se o valor passado é uma array e retorna um valor booleano.

let li2 = document.querySelectorAll('li'); // NodeList
Array.isArray(li2); // false

li2 = Array.from(li2); // Array
Array.isArray(li2); // true

// ARRAY.OF(), ARRAY() E NEW ARRAY()
// Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array.

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]

// PROPRIEDADES E MÉTODOS DO PROTOTYPE
// [].length retorna o tamanho da array.

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2

// MÉTODOS MODIFICADORES [].SORT() [].REVERSE()
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

const instrumentos = ['Guitarra', 'Baixo', 'Violão']
instrumentos.sort() // ['Baixo', 'Guitarra', Violão]
instrumentos.reverse() // ['Violão', 'Guitarra', 'Baixo']

const idades = [32,21,33,43,1,12,8]
idades.sort() // [1, 12, 21, 32, 33, 43, 8]

console.log(idades)
*/

// [].UNSHIFT() E [].PUSH()
// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

const carros = ['Ford', 'Fiat', 'VW']
carros.unshift('Kia', 'Porsche')
const novaArray = carros.push('Kia', 'Ferrari', 'Lamborghini')

console.log(novaArray)

// [].SHIFT() E [].POP()
// [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

// console.log(carros)
// console.log(carros.shift())
// console.log(carros)
// console.log(carros.pop())

// [].REVERSE()
// [].reverse() inverte os itens da array e retorna a nova array.

// console.log(carros.reverse())

// [].SPLICE()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

// console.log(carros)
// console.log(carros.splice(2,2, 'Fusca')) 

// console.log(carros)

// [].COPYWITHIN()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 1, 4))

/* 
[].FILL()
[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
*/
/*
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']
*/

/*
MÉTODOS DE ACESSO [].CONCAT()
Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
*/
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
console.log(transporte1.concat(transporte2, '322', 'oi'))

/* [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.*/

const linguagens = ['html', 'css', 'js', 'php', 'python']

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

/* [].JOIN()
[].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array. */

// linguagens.join(); // 'html,css,js,php,python'
// linguagens.join(' '); // 'html css js php python'
// linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2').join('h1')
// // htmlString = htmlString.join('h1')

// console.log(htmlString)

/* [].SLICE()
[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.*/ 

// const linguagens = ['html', 'css', 'js', 'php', 'python']

const cloneLinguagens = linguagens.slice()

console.log(linguagens.slice(2)) // ["js", "php", "python"]
console.log(linguagens.slice(1,4)) // ["css", "js", "php"]

