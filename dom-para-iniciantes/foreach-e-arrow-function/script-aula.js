//--------------------- forEach--------------------

// const imgs = document.querySelectorAll('img')
// console.log(imgs)


// imgs.forEach(function(item, index, array){
//     // console.log(item, index, array)
// })


//---------------- array e forEach -----------------------
const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos) // transforma em array a const 'titulos', pois o getElementByClassName retorna uma HTML collection

console.log(titulos)
console.log(titulosArray)

titulosArray.forEach(function(item, index, array){
    // console.log(item, index, array)
})

//------------------- Arrow function ------------------

// mesma função do forEach, porém a função é escrita em forma de arrow function
const imgs = document.querySelectorAll('img')

// let i = 0
// img.forEach((item)=> {
//     console.log(i++)
// })

let i = 0
imgs.forEach((item)=> {
    return console.log(i++)
})