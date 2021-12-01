/* FUNCTION
Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.*/

// function areaQuadrado(lado) {
//   return lado * lado;
// }
// const perimetro = new Function('lado', 'return lado * 4')

/* PROPRIEDADES
Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.*/
/*
function somar(n1, n2, n4) {
  return n1 + n2;
}

console.log(somar.name)
*/
/* FUNCTION.CALL()
function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.*/ 
/*
function darOi(nome, idade){
  console.log('Oi pra você' + nome + idade)
}

darOi.call(null, ' Andre', 20)

window.marca = 'Carro'
window.ano = 288

function descricaoCarro(velocidade){
  console.log(this)
  console.log(this.marca + ' ' + this.ano + velocidade)
}

descricaoCarro.call({marca: 'Honda', ano:2015}, 100)
*//*
const carros = ['Ford', 'Fiat', 'VW']
const frutas = ['Banana', 'Uva', 'Pêra']


carros.forEach.call(frutas, (item)=>{ // está substituindo o this de forEach, então se passar outro valor no lugar de carros, o retorno sera o mesmo
  console.log(item)
})
*/
/* THIS
O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().*/ 

/*EXEMPLO REAL
O objeto atribuído a lista será o substituído pelo primeiro argumento de call() */
/*
function Dom(seletor){
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe){
  console.log(this)
  this.element.classList.add(classe)
}

const li = {
  element: document.querySelector('li')
}

Dom.prototype.ativo(call(li, 'ativar'))
*/

/* ARRAY'S E CALL
É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like). */

const frutas = ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas)

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)

const filtro = arrayLi.filter((item)=>{
  return item.classList.contains('ativo')
})

console.log(filtro)

console.log(li)

/* FUNCTION.APPLY()
O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array. */

const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar


 /* APPLY VS CALL
A única diferença é a array como segundo argumento.*/
// const li = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

/* FUNCTION.BIND()
Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this. */ 

const li2 = document.querySelectorAll('li');

const $ = document.querySelectorAll.bind(document)

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}s`;
  }
}

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda)

console.log(acelerarHonda(300,20))
// console.log(carro)

