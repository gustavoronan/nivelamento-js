
const item1 = document.querySelector("li")

console.log(item1.innerHTML)

const items = document.querySelectorAll('li')
console.log(items)

//selecionando o primeiro card
const card1 = document.querySelector(".card")
console.log(card1)

//adicionando paragrafo para dentro do card
const paragrafo = document.createElement('p')
paragrafo.innerHTML="Descrição"
card1.appendChild(paragrafo)

card1.classList.add("super-border") //criado no css alterado no js

//const cards = document.querySelectorAll(".card")

//comentado mas eh uma forma valida

const cards = document.getElementsByClassName("card")

console.log(cards)
console.log(cards[0])

Array.from(cards).map(item =>{
    console.log(item.innerHTML) //para cada card printa o conteudo do card
}) //transformando em um array
