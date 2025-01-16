const cep = "01001000"
const fetchResult =  fetch(`https://viacep.com.br/ws/${cep}/json/`)
//quando chamamos o fetch resulta em uma promise assincrona

async function getJsonResponse(url){
    const response = await fetch(url)
    const jsonBody = await response.json()
    return jsonBody
}

// getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)

console.log(getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`).then(result=>{
    console.log(result)
})) //forma 1 de realizar o processo assincrono


async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const result = await getJsonResponse(url)
    console.log(result)
} //forma 2 de realizar o processo assincrono

showCepData("85855147") //chamada assincrona
console.log("A") //apenas um teste do async