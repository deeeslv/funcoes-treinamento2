//Para ir me relembrando aos poucos gosto de voltar no básico, as vezes o básico seja o necessário.

//Ex 001
function saudação(nome){
    return `Saudações ${nome}!`
}

console.log(saudação("André"))

//Ex 002

function areaRetangulo(largura, altura){
    let area = largura * altura
    return `Area do retangulo = ${area}`
}

console.log(areaRetangulo(5, 3))

//Ex 003

function podeDirigir(idade){
    if (idade >= 18) return true
    else return false
}

console.log(podeDirigir(20))
console.log(podeDirigir(17))

//Ex 004

function formatarPreco(valor){
    valorFormatado = valor.toFixed(2)

    valorFormatado = valorFormatado.replace(".", ",")

    return "R$" + valorFormatado
}

console.log(formatarPreco(19.9))

//Ex 005

function contarLetras(palavra){
    return palavra.length
}

console.log(contarLetras("JavaScript"))