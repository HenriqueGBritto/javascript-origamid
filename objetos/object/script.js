// Crie uma função que verifique
// corretamente o tipo de dado

const dadosPessoa = {
  nome: 'Henrique',
  idade: 21,
  sexo: 'Masculino'
}

function tipoDeDado(item){
  return Object.prototype.toString.call(item)
}
console.log(tipoDeDado(dadosPessoa))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  lados: 4
}

Object.seal(quadrado)


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

function showProtoProps(obj){
  return Object.getOwnPropertyNames(obj)
}
