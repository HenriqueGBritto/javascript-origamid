/*[].FOREACH()
[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item, index, array)=>{
  console.log(item.toUpperCase(), index, array)
})

console.log(carros)
*/

/* Arrow function

const li = document.querySelectorAll('li');

li.forEach((item, index) => item.classList.add()); */

/* [].MAP()
[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração. */
/*
const carros = ['Ford', 'Fiat', 'Honda']

const novaArray  = carros.map((item, index, array)=>{
  return item.toUpperCase()
})

const numeros = [2, 4, 5, 6, 78]

const numerosX2 = numeros.map(n => n * 2) // forma resumida de escrever a função abaixo --- quando a expressão é só uma linha, ela automaticamente retorna o valor após a =>
// const numerosX2 = numeros.map((numero)=>{
//   return numero * 2
// })



console.log(numerosX2)

console.log(novaArray)
console.log(carros)
*/
/* [].MAP() COM OBJETOS
Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.*/ 
/*
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min)

const nomeAulas = (aula) => aula.nome

// const nomeAulas = function nomeAulas(aula) {
//   return aula.nome
// }

const arrayNomeAulas = aulas.map(nomeAulas)

console.log(arrayNomeAulas)
console.log(tempoAulas)

*/

/* 
  [].REDUCE()
  [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
*/
/*
const aulas = [10, 25, 30]

const reduceAulas = aulas.reduce((acumulador, item, index, array)=>{
  console.log(acumulador, item, index)
  return item
}, 100)

const numeros = [10, 25, 30, 3, 54, 33, 22]

const maiorNumero = numeros.reduce((anterior, atual)=>{
  return anterior > atual ? anterior : atual
},0)

console.log(maiorNumero)*/
/*
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})
*/
/* [].REDUCERIGHT()
Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.*/
/*
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva
*/
/*[].SOME()
[].some(), se pelo menos um return da iteração for truthy, ele retorna true. */

// const frutas = ['Banana', 'Pêra', 'Uva']

// const temUva = frutas.some((item)=>{
//   return item === 'Uva'
// })

// console.log(temUva)

/* [].EVERY()
[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.*/

// const every = frutas.every((fruta)=>{
//   console.log(fruta)
//   return fruta 
// })

// console.log(every)

// const numeros = [6, 43, 22, 88, 101, 29];
// const maiorQue3 = numeros.every(n => n > 3); // true

/* ].FIND() E [].FINDINDEX()
[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.*/

// const indexUva = frutas.find((item) => {
//   return item === 'Uva'
// })

// const indexUva2 = frutas.findIndex((item) => {
//   return item === 'Uva'
// })

// console.log('Index: ', indexUva)
// console.log('Index: ', indexUva2)

/* [].FILTER()
[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy. */

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']

const arrayFrutas = frutas1.filter((item)=>{
  console.log(item)
  return item 
})

console.log(arrayFrutas)

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula)=>{
  console.log(aula.min);
  return aula.min > 15
})

console.log(maiores15)