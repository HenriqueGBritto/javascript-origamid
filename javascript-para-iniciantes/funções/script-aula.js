function areaQuadrado(lado){
   return lado * lado
}

console.log(areaQuadrado(100))

function pi(){
    return 3.14
}

var total = 5 * pi()
console.log(pi())

function imc(peso, altura){
    var imc = peso / (altura ** 2)
    return imc
}

console.log(imc(80, 1.8))

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Eu gosto do céu'
    } else if ( cor === 'verde'){
        return 'Eu gosto de mato'
    } else {
        return 'Eu não gosto de cores'
    }
}

console.log(corFavorita())

addEventListener('click', function(){
    console.log('Oi viado')
})


function imc2(peso, altura){
    const imc = peso / (altura ** 2)
    console.log(imc)
}

imc2(70, 1.70)
console.log(imc2(70, 1.70))


function terceiraIdade(idade){
    console.log(typeof idade)
    if(typeof idade !== 'number'){
        return 'Por favor preencha um número'
    } else if(idade >= 60){
        return true
    } else {
        return false
    }
}

console.log(terceiraIdade('oi'))


function faltamVisitar(paisesVisitados){
    var totalPaises = 193
    return `Faltam visitar ${totalPaises - paisesVisitados} países`
}

console.log(faltamVisitar(20))

