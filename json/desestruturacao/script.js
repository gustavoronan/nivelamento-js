const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

const {id, client} = obj; //criando variaveis isoladas que fazem referencia ao conteudo do obj

function subTotal({price, quantity}){
    return price * quantity
} 

console.log(subTotal(obj.items[1]))

function total({items}) {
    let soma = 0
    for (let i = 0; i<items.length; i++){
        soma = soma + subTotal(items[i])
    }

    return soma
}

console.log(total(obj))

const [item1, item2] = obj.items //este exemplo pega os dois items contidos no objeto, se houvessem mais itens teria que seguir com item3, 4 e etc. No caso estamos isolando os items