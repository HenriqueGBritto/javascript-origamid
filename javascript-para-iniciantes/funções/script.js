// crie uma função para verificar se um valor é truthy

function isTruthy(dado){
    return !!dado
}

// crie uma função matematica que retorne o perimetro de um quadrado
function perimetroQuadrado(lado){
    return lado * 4
}

//crie uma função que retorne o seu nome completo
// ela deve possuir os parametros: nome e sobrenome

function fullName(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

//crie uma função que verifica se o numero é par
function numPar(num){
    if(num % 2 == 0){
        return `O número ${num} é par!`
    } else {
        return `O número ${num} é impar!`
    }
}

// crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDeDado (dado){
    return typeof dado
}

//criar função para mostrar o nome quando o click ocorrer
addEventListener('click', function(){
    console.log('Meu nome é Kbida')
})

let totalPaises = 193

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} para visitar`
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

