function verificarMaioridade(idade){
    if (idade >= 18) return "Maior de idade!"
    else return "Menor de idade!"
}

let res = verificarMaioridade(18)
console.log(res)

/*function verificarMaioridade(idade){
    return idade >= 18 ? "Maior de idade!" : "Menor de idade!" 
} */
// Dava para usar ternário também    
