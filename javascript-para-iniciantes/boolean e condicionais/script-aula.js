// boolean e condicionais
var possuiGraduacao = false
var possuiDoutorado = true

if(possuiGraduacao){
    console.log('É verdadeiro')
    var x = 10
} else if(possuiDoutorado){
    console.log('Possui Doutorado')
} else {
    console.log('Não possui nada')
}

var nome 

if(nome){
    console.log(nome)
} else {
    console.log('Nome não existe')
}

var condicional = (5 - 10) && (5 + 5)
if(condicional){
    console.log('verdadeiro')
} else {
    console.log('Falso')
}

var condicional2 = (5-5) || (5+5) || (10-2)
console.log(condicional2)

// switch

var corFavorita = 'azul'

switch (corFavorita) {
    case 'azul':
        console.log('Olhe para o ceu!')
        break

    case 'amarelo':    
        console.log('Olhe para o sol')
        break
     
    case 'verde':    
        console.log('Olhe para a floresta')
        break

    default:
        console.log('Feche os olhos')
}

