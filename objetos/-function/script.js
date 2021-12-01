// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(p, (acc, item)=>{
  return acc + item.innerText.length
}, 0)

console.log(totalCaracteres)




// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  classe ? elemento.innerText = conteudo : null
  return elemento
}
console.log(criarElemento('p', 'ativo', 'Hello World'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

const cursosJS = h1Titulo('Cursos de Javascript')
const cursosHTML = h1Titulo('Cursos de HTML')


console.log(h1Titulo(cursosJS))
console.log(h1Titulo(cursosHTML))
