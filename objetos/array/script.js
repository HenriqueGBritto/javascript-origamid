const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

const primeiroValor = comidas.shift()
console.log(primeiroValor)

// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop()
console.log(ultimoValor)

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)

// Adicione 'Peixe' e 'Batata' ao início da array

comidas.unshift('Peixe', 'Batata')
console.log(comidas)

/* --------------------------------------------------------------*/

// Arrume os estudantes em ordem alfabética
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

estudantes.sort()
console.log(estudantes)

// Inverta a ordem dos estudantes

estudantes.reverse()
console.log(estudantes)

// Verifique se Joana faz parte dos estudantes

console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.includes('Juliana'))

 /*---------------------------------------------------*/

// Substitua section por ul e div com li, utilizando split e join

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`


html = html.split('section').join('ul').split('div').join('li')
console.log(html)


 /*--------------------------------------------------*/ //
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

const cloneCarros = carros.slice()

console.log(carros.pop())
