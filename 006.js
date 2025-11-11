function analisarTexto(texto){
    return{
        quantidadeDeCaracteres: texto.length,
        contemJavaScript: texto.includes("JavaScript"),
        textoMaiusculo: texto.toUpperCase(),
    }
}

let res = analisarTexto("Estou estudando JavaScript!")

console.log(res)