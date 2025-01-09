function soma(num1,num2){
    return num1 + num2
}

const soma2 = function(num1, num2){
    return num1 + num2
}

const soma3 = (num1, num2) => {
    return num1 + num2
} //funcao lambda arrow

const soma4 = (num1, num2) => num1 + num2

const dobro1 = function(num){
    return num * 2
}

const dobro2 = num => num*2
//funcao lambda arrow

//Se a Funcao nao tem retorno ela retorna undefined

function mostrarPreco(preco){
    console.log("Preço = " + preco)
}


//Variaveis definidas dentro do escopo da func nao vazam

function areaCirculo(raio){
    const pi = 3.14
    return pi * raio * raio
}

//console.log(pi) //retorna erro pq nao vaza escopo
//nem mesmo o var vaza escopo de funcao


//Function hoisting: "movidas" para cima pelo motor do JS
teste(10)

function teste(x) {
    console.log("Teste = " + x)
}

// Funcoes podem ser passadas como argumento

function triplo(num){
    return num * 3
}

function aplicar (f, num){
    const result = f(num)
    console.log("Resultado = " + result)
} //funcao aplicar recebe funcao f como argumento
//e dentro da logica do aplicar a funcao f eh chamada

aplicar (triplo, 10)
aplicar (dobro1, 10)


