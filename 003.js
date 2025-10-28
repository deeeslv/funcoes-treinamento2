function calcularIMC(peso, altura){
    let IMC = (peso / (altura * altura)).toFixed(2)
    return `Seu IMC É ${IMC}`
}

let res = calcularIMC(70, 1.75)
console.log (res)