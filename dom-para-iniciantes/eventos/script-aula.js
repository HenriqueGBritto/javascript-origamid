const img = document.querySelector('img')

function callback(event){
    console.log(event)
}


// img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event){
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
}

// animaisLista.addEventListener('click', callbackLista)


const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
    event.preventDefault()
    // console.log(event)
    console.log(this)
    console.log(this.getAttribute('href'))
    console.log(event.currentTarget)

}

linkExterno.addEventListener('click', handleLinkExterno)

const h1 = document.querySelector('h1')

function handleEvent(event){
    console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// // h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)

function handleKeyboard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul')
    }
    console.log(event.key)
}

window.addEventListener('keydown', handleKeyboard)


// forEach e Eventos

const imgs = document.querySelectorAll('img')

function handleImg(event){
    console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img)=>{
    img.addEventListener('click', handleImg)
})

/* ------------------- ANOTAÇÕES ---------------------------

keyboard - pode ser usado para adicionar atalhos para facilitar a navegação no site, atraves dos eventos do keyboard

this é uma palavra chave de JS, que pode fazer referencia a diferentes objeto dependendo do contexto. No caso de eventos, fara referencia ao elemento em que addEventListener foi adicionado

event.preventDefault() -- previne o comportamento padrão do evento no browser. no caso de um link externo, por ex. , ira prevenir que o link seja ativado.

é boa pratica separar a função de callback do addEventListener, ou seja, declarar uma função ao inves de passar diretamente uma função anonima

o primeiro parametro do callback se refere ao evento que aconteceu

*/