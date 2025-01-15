function dizerOla(){
    console.log("Ola mundo")
}
//setTimeout(dizerOla, 2000)

function dizerBomDia(nome){
    console.log("bom dia" + nome)
}

setTimeout(() => {
    dizerBomDia(" Gustavo")

    setTimeout(() => {
        dizerBomDia(" Joao")

        setTimeout(() => {
            
            dizerBomDia(" Ricardo")

        }, 2000);


    }, 2000);


}, 2000);

console.log("A")
console.log("B")