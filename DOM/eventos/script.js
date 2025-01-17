//trabalhando com eventos
const inputName = document.forms.cadastro.name
console.log(inputName)



inputName.addEventListener('keyup', eventTest)

function eventTest(event){
    console.log(event.target.value)
}
const inputEmail = document.forms.cadastro.email

inputEmail.addEventListener('change', handleInputEmailChange)

const btnSubmit = document.querySelector('[type="submit"]')

btnSubmit.addEventListener('click', handleInputBtnSubmit)



function handleInputEmailChange(event){
   if(validateEmail(event.target.value)){
    console.log("Email válido")
    event.target.classList.remove('inputError')
   }else{
    event.target.classList.add('inputError')
    console.log("Inválido")
   }
}

function handleInputBtnSubmit(event){
    event.preventDefault() //tirando o envio automatico

    console.log(`Dados: ${inputName.value}, ${inputEmail.value} `)
}

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }