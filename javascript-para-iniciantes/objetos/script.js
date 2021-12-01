//crie um objeto com os seus dados pessoais. Deve possuir pelo menos duas propriedades nome e sobrenome

var dados = {
    nome: 'Henrique',
    sobrenome: 'Goncalves',
}

//crie um moetodo no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000

//crie um objeto de um cachorro que represente um labrado, preto com 10 anos, que lato ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return 'Latir'
        } else { 
            return 'Nada'
        }
    }
}