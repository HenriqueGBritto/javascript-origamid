const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection) //gridSection[] - retorna semelhante a umm array (numero entre [] se refere a posição que esta cada um dos elementos com a classe)

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linksInterno = document.querySelector('[href^="#"]') // ^ o acento significa "começa com"

console.log(linksInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

