// REST: valores passados com virgula => array

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

//console.log(sum(1,2,3,4))

const result1 = sum(1,2,3,4)

console.log(result1)

const result2 = Math.max(2,5,9,3)

console.log(result2)

//spread: array -> valores separados por virgula

const myNumbers=[2,3,10,5]

const result3 = Math.max(...myNumbers)

console.log(result3)

//spread: objeto -> valores separados por virgula

const item = {
    description: "Computador",
    price: 2000,
    quantity: 5
}

const cloneItem = { ...item } //clonando os dados separados por virgula

const cloneItemPlus = { ...item, tamanho: 10 } //adicionando um valor a mais pegando como base um objeto ja criado

console.log(cloneItem)
console.log(cloneItemPlus)
