const list1= [1, 2, 3, 4]
const list2=[]
const nomes = ["joao", "maria", "anabela"]


//map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function dobro(x){
    return x * 2
}

function triplo(x){
    return x * 3
}

const m1 = list1.map(dobro)
const m2 = list1.map(triplo)
const m3 = list1.map(x => x * 2)


console.log("MAP ----------------------")
console.log(m1)
console.log(m2)
console.log(m3)


// filter: retorna uma nova colecao contendo apenas os elementos da colecao original que satisfazem um dado predicado

function par(x){
    return x % 2 == 0
}

const filter1 = list1.filter(par)
const filter2 = list1.filter(x => x%2 == 0)
const filter3 = list1.filter(x => x>2)


console.log(filter1)
console.log(filter2)
console.log(filter3)

//reduce: aplica cumulativamente uma funcao aos elementos de
//uma colecao, retornando o resultado final cumulativo.
// ps/ voce pode informar, opcionalmente, um valor inicial como parametro(necessario para colecao vazia)

function soma(x, y){
    return x + y
}

const reduce1 = list1.reduce(soma)

console.log("REDUCE --------------")

console.log(reduce1) //soma dos valores do array
console.log("REDUCE LISTA VAZIA --------------")

const reduce2 = list2.reduce(soma, 0) //a lista2 esta vazia, por isso devemos passar o segundo parametro
console.log(reduce2)


function produto(x, y){
    return x * y
}

const reduce3 = list1.reduce(produto)
console.log("REDUCE COM MULTIPLICAÇÃO --------------")
console.log(reduce3)

//sort: ordena a colecao conforme a funcao de comparçao 
//informada como parametro

const sort1 = nomes.sort();

console.log("SORT -------------")
console.log(sort1)

function compararPorTamanho(sort1, sort2){
    return sort1.length - sort2.length
}

const sort2 = nomes.sort(compararPorTamanho) //altera o array

console.log(sort2) //esta ordenando por tamanho