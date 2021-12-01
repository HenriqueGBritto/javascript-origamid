// const h1 = document.querySelector('h1')
// const animaisLista = document.querySelector('.animais-descricao')

// h1.innerHTML = '<p>Novo texto</p>'
// h1.outerHTML = '<p>Novo texto</p>'


// console.log(animaisLista.innerHTML)

const lista = document.querySelector('.animais-lista')/*

console.log(lista.parentElement.parentElement) // retorna o elemento pai

console.log(lista.nextElementSibling) // retorna o elemento abaixo deste, no mesmo nível

console.log(lista.previousElementSibling) // retorna o elemento acima deste, no mesmo nível

console.log(lista.children) // retorna HTMLCollection com os filhos

console.log(lista.children[0]) // retorna o primeiro filho

console.log(lista.children[--lista.children.length]) // retorna o ultimo filho

lista.querySelectorAll('li') // retorna todas as li's
lista.querySelectorAll('li:last-child') // retorna a ultima li

const novaLista = document.querySelector('.animais-lista')

novaLista.previousElementSibling // elemento acima
novaLista.previousSibling // node acima

novaLista.firstChild // primeiro node child
novaLista.childNodes // todos os node child

*/

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

console.log(contato) 

// animais.appendChild(titulo) // move para o final 
// contato.insertBefore(animais, mapa) // move para o final 
// contato.removeChild(titulo)
// contato.replaceChild(lista, titulo)

// metodo para criar novos elementos -- createElement()

const novoH1 = document.createElement('h1')

novoH1.innerText = 'Novo titulo'
novoH1.classList.add('titulo')

mapa.appendChild(novoH1)

//metodo para clonar elementos -- cloneNode()


const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true)

faq.appendChild(cloneH1)



/* --------------------- ANOTAÇÕES --------------------------

outerHTML -- todo o html do elemento
innerHTML -- html interno
innerText -- texto, sem tags

propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas. exemplo: element.innerText = 'Novo texto'
*/