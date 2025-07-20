const bodyElement = document.body
// console.log("bodyElement", bodyElement)
// bodyElement.style.background = 'yellow'
const btn = document.getElementsByTagName('button')[0]
// console.log('btn', btn) 
// arrow function anonymous => (parameter1, paramenter2,...) => { function body }
// arrow function with name => const arrowFuncExample = (parameter1, paramenter2,...) => { function body }
// btn.addEventListener('click', () => {
//     bodyElement.style.background = 'yellow'
// })

//version 2
// const arr = ['yellow','red','green','blue','pink','lightGreen','black']
// let i = 0
// btn.addEventListener('click', () => {
//     bodyElement.style.background = arr[i]
//     i++
//     i = i % arr.length
// })

//version 3
// radomNumber = Math.floor(Math.random() * 7)
const arr = ['yellow','red','green','blue','pink','lightGreen','black']
let i = 0
btn.addEventListener('click', () => {
    i = Math.floor(Math.random() * 7)
    bodyElement.style.background = arr[i]
})
