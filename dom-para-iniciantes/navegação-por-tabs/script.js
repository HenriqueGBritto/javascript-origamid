const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if(tabMenu.length && tabContent.length){
    
tabContent[0].classList.add('ativo')

function activeTab(index){
    tabContent.forEach((section)=>{
        section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
}

tabMenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener('click', ()=>{
        activeTab(index)
    })
})
}

const animal = {
    name: 'macaco',
    bioma: 'selva',
    imageURL: 'www.exemplo.com.br'
}

const animalsList = [
    {
        name: 'macaco',
        bioma: 'selva',
        imageURL: 'www.exemplo.com.br'
    },
    {
        name: 'leao',
        bioma: 'savana',
        imageURL: 'www.exemplo.com.br'
    },
    {
        name: 'elefante',
        bioma: 'savana',
        imageURL: 'www.exemplo.com.br'
    },
    {
        name: 'crocodilo',
        bioma: 'savana',
        imageURL: 'www.exemplo.com.br'
    }
]

animalsList.forEach((item, index)=>{
    console.log(item.name, index)
})

// animalsList.filter((item)=>{
//     console.log(item.name==='leao')
// })

