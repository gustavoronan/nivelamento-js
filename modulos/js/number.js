export function sum(num1, num2){
    return num1 + num2
}

export function exp(base, expoente){
    return base ** expoente
}

export function round(value, precision){
    var multiplier = exp(10, precision || 0)
    return Math.round(value * multiplier) / multiplier
}