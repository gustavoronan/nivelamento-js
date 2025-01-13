import Employee from './models/employee.js'
import * as salaryService from './services/salary-service.js'

const data = document.getElementById('grossSalaryInput').innerHTML.split("\n") //tranformando em um vetor

console.log(data)

const employee = new Employee(data[0], Number(data[1])) //pegando os dados do employee e transformando o salario em number

const netSalary = salaryService.netSalary(employee)

console.log(`Funcionario = ${employee.name}`)
console.log(`Salario Bruto = ${employee.grossSalary.toFixed(2)}`)
console.log(`Salário líquido = ${netSalary.toFixed(2)}`);