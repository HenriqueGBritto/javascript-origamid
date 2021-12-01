var pessoa = {
    nome: 'Andre',
    idade: 28,
}

console.log(pessoa)

var quadrado = {
    lados: 4, 
    // area: function(lado){
    //     return lado * lado
    // },
    // perimetro: function(lado){
    //     return this.lados * lado
    // }

    // modo abaixo é um metodo mais novo de escrever metodos
    area(lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lados * lado // this faz referencia ao proprio objeto. Nesse caso, faz referencia a algo dentro do proprio objeto
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

 var menu = {
     width: 800,
     height: 650,
     backgroundColor: '#84E',
     metadeHeight(){
         return this.height / 2
     }
 }

 menu.backgroundColor = '#000'
 var bg = menu.backgroundColor
 
 