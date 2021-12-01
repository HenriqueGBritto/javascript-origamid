/* quando o usuario clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links*/ 

const linkInterno = document.querySelectorAll('a[href^="#"]')
console.log(linkInterno)

function handleLink(event){
    event.preventDefault()
    linkInterno.forEach((link)=>{
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}

linkInterno.forEach((link)=>{
    link.addEventListener('click', handleLink)
})

/* Selecione todos os elementos do site começando a partir do body, ao clique, mostre exatamente quais elementos estão sendo clicados*/

const allElements = document.querySelectorAll('body *')

function handleElement(event){
    console.log(event.currentTarget)
}

function removeElement(event){
    event.currentTarget.remove()
}

// allElements.forEach((element)=>{
//     element.addEventListener('click', removeElement)
// })


//se o usuario clicar na tecla (t), aumente todo o texto do site.


function textSize(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('texto-grande') //documentElement se refere ao proprio HTML
    }
}

window.addEventListener('keydown', textSize)

