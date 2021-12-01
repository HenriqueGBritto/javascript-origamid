const listaAnimais = document.querySelector('.copy')

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop

console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft

const rect = primeiroh2.getBoundingClientRect()

console.log(rect.top)

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
    
)

// --------- matchMedia ---------
const small = window.matchMedia('(max-width: 600px').matches

if(small){
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}

//const section = document.querySelector('.animais')

// section.clientHeight/Width -- height/width + padding
// section.offsetHeight/Width -- height/width + padding + border
// section.scrollHeight-Width -- height/width total, mesmo dentro de scroll
// section.offsetTop -- distancia entre o topo do elemento e o topo da pagina
// section.offsetLeft -- distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina


// -------------- getBoundingClientRect() ---------------------
// const rect = section.getBoundingClientRect()

//rect.height -- height do elemento
//rect.width -- width do elemento
//rect.top -- distancia entre o topo do elemento e o scroll

// ------------- Window -------------------------
/*
window.innerWidth -- width da janela
window.outerWidth -- soma dev tools também
window.innerHeight -- height da janela
window.outerWidth -- soma a barra de endereço

window.pageYOffset -- distancia total do scroll horizontal
window.pageXOffset -- distancia total do scroll vertical

if(window.innerWidth < 600) {
    console.log('Tela menos que 600px')
}

*/

/* ------------------ matchMedia() -----------------------

const small = window.matchMedia('(max-width: 600px')

if(small.matches){
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}
*/