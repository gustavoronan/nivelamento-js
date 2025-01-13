import { sum, exp, round } from "./number.js"
import Product from "./product.js"

const x = sum(3,4)

console.log(x) //forma 1
console.log(exp(3,4)) //forma 2, funcao 2
console.log(round(3.44332, 2)) //forma 2, funcao 3

const obj = new Product("Mousepad", 20.00, 14)

console.log(obj)