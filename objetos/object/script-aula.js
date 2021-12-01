const pessoa = new Object({
  nome: 'Andre'
});

const carro = {
  rodas: 4,
  init(valor, preco, ano){
    this.marca = valor
    this.preco = preco
    this.ano = ano
    // return valor
  },
  acelerar(){
    return this.marca + ' acelerou'
  },
  buzinar(){
    return this.marca + ' buzinar'
  }
}

/* MÉTODOS DE OBJECT
Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento. */ 

const honda = Object.create(carro)
// honda.marca = 'honda'

console.log(honda)

honda.init('honda', 80000, 2015)

console.log(honda)

/* OBJECT.ASSIGN()
Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo. */

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {}

Object.assign(moto, funcaoAutomovel)

/* OBJECT.DEFINEPROPERTIES()
Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades. */

Object.defineProperties(moto, {
  rodas: {
    // value: 2,
    // configurable: false, // false por padrão
    // writeble: true, // false por padrão
    // enumerable: false // false por padrão
  get() {
    return this._rodas
  },
  set(valor){
    this._rodas = valor * 4 + 1000
  }

  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

/*GET E SET
É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.*/

/*OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.*/

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade



/*OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.*/

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro2 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro);
// ['marca', 'ano']
Object.values(carro);
// ['Ford', 2018]
Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]]


/*OBJECT.GETOWNPROPERTYNAMES(OBJ)
Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).*/

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro3 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro);
// ['marca', 'ano']

/*OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.*/

// const frutas = ['Banana']

// console.log(Object.getPrototypeOf(frutas))
// console.log(Array.prototype)

const frutas1 = ['Banana', 'Pêra']
const frutas2 = ['Banana', 'Pêra']

const novaFruta = frutas1

Object.is(frutas1, frutas2)

/*OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
- Object.freeze() impede qualquer mudança nas propriedades. 
- Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas.
- Object.preventExtensions() previne a adição de novas propriedades.*/


const carro4 = {
  marca: 'Ford',
  ano: 2018,
  // portas: 4
}

Object.seal(carro4)
carro.portas = 4

/*PROPRIEDADES E MÉTODOS DO PROTÓTIPO
Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.*/

/*{}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.*/

const frutas3 = ['Banana', 'Uva'];

frutas3.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

/*{}.ISPROTOTYPEOF(VALOR)
Verifica se é o protótipo do valor passado.*/

/*{}.TOSTRING()
Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).*/

const frutas = ['Banana', 'Uva']
const frase = 'Oi frase'
const somar = function(a, b){
  return a + b
}
const carro5 = {
  marca: 'Ford'
}


console.log(carro5.toString())