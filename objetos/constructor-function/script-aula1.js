// função construtora -- são responsaveis por construir novos objetos sempre que chamamos a mesma 

function Carro(marcaAtribuida, precoAtribuido,numeroPortas,tipoCombustivel){
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
    this.portas = numeroPortas
    this.combustivel = tipoCombustivel
}

const honda = new Carro('Honda', 5000)
const fiat = new Carro('Fiat', 3000)

const corsa = new Carro('Chevrolet', 14000, '4 Portas', 'Gasolina e GNV')

// a palavra new é repsonsavel por criar um novo objeto baseado na funçãop que passarmos a frente dela


function Carro2(marca, precoInicial) {
    this.taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
  }
  
  // Variáveis dentro da Constructor estão "protegidas" - ou seja, elas não aparecem como propriedades do objeto


  const mazda = new Carro2('Mazda', 5000)
  
