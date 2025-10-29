function gerarCumprimento(nome, horadia){
    if (horadia >= 6 && horadia <= 12) return `Bom dia, ${nome}!`
    else if (horadia >= 13 && horadia <=18) return `Boa tarde, ${nome}!`
    else return `Boa noite, ${nome}!`
}

let res = gerarCumprimento("André", 8)
console.log(res)