//crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002

var anoCampeao = ['1959', '1962', '1970', '1994', '2002']

//interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, "o brasil ganhou a copa de ....."

for(var i=0; i < anoCampeao.length; i++) {
    console.log(`O brasil ganhou a copa de: ${anoCampeao[i]}`)
}

//interaja com um loop nas frutas abaixo e pare ao chegar em pera

var frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia']

for(var i = 0; i < frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'pera'){
        break;
    }
}



var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)
