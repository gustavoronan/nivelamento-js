const cep = "01001000"
const fetchResult =  fetch(`https://viacep.com.br/ws/${cep}/json/`)
//quando chamamos o fetch resulta em uma promise assincrona

console.log(fetchResult)

fetchResult.then(response=>{
    console.log("Success!", response)
    const json = response.json()
    json.then(result =>{
        console.log("Json Success", result)
    }).catch(error=>{
        console.log("Erro no Json", error)
    })
    console.log("json", json)
})
.catch(error=>{
    console.log("Erro!", error)
})