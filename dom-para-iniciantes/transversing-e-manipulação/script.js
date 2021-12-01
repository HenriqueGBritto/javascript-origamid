// duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)

// selecione o primeiro DT da dl de Faq

const faqLista = document.querySelector('.faq-lista')
const primeiroDT = faqLista.children[0]
const dd = primeiroDT.nextElementSibling


console.log(primeiroDT)
console.log(dd)

//substitua o conteudo html de .faq pelo de .animais

const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML
