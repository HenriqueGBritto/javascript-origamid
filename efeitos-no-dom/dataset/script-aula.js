const div = document.querySelector('[data-cor]')

console.log(Object.prototype.toString.call(div))

/*DATASET
dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.*/

console.log(div.dataset.cor)

/*// Ambos os valores selecionam a mesma div acima.

let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');
*/

div.dataset.height = 1000
console.log(div.dataset)
delete div.dataset.width
console.log(div.dataset)

/*DATA ATRIBUTES
Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.*/

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data

div.dataset.totalHeight = 2000

console.log(div.dataset)