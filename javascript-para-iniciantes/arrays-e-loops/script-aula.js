
// var ultimoItem = videoGames.pop()
// videoGames.pop() // remove o ultimo item e retorna ele
// videoGames.push('3DS') // adiciona ao final do array
// videoGames.length // 3

// loop

for(var numero = 0; numero <= 4; numero++) {
    console.log(numero)
}

//while loop

var i = 0 
while (i<5){
    console.log(i)
    i++
}

//arrays e loops
var videoGames = ['switch', 'ps4', 'xbox', '3ds']

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item])
    if(videoGames[item] === 'ps4') {
        break;
    }
}

//forEach

var frutas = ['banana', 'pera', 'maçã', 'abacaxi', 'uva']

frutas.forEach(function(fruta, index, array){
    console.log(fruta, index, array)
})


