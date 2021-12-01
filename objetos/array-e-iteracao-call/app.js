const minhaUl = document.querySelector('.pokemons')
console.log(minhaUl)
const url = `https://pokeapi.co/api/v2/pokemon?limit=151`

const fetchAllPokemon = () => {
    fetch(url)
        .then(response => response.json())
        .then(allpokemon => {
            const pokemonObject = allpokemon.results
            console.log(pokemonObject)
            
            minhaUl.innerHTML = pokemonObject.map((pokemonObject, i) => {
                const elementName = `<li class="name">${pokemonObject.name}</li>`

                return elementName
            }).join('')

            const meuName = document.querySelectorAll('.name')
            
            meuName.forEach((item)=>{
                item.style.listStyle = 'none'
            })

        })
}

fetchAllPokemon()