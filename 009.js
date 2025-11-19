//Reforçando a criação básica direta de objetos.
let perfil1 = {
    nome: "André",
    idade: 21,
    ativo: true,
    hobbies: ["Programar", "Correr"]
}

let perfil2 = {
    nome: "Julia",
    idade: 17,
    ativo: true,
    hobbies: ["Treinar", "Jogar"]
}

let perfil3 = {
    nome: "Giba",
    idade: 59,
    ativo: false,
    hobbies: ["Pescar", "Beber"]
}

console.log(perfil1.idade)
console.log(perfil3.nome)
console.log(perfil2.hobbies)
console.log(perfil2.nome)
console.log(perfil1.hobbies[1])
console.log(perfil3.ativo)

perfil1.idade = 22
perfil2.hobbies.push("Ler")
perfil3.ativo = true
perfil1.cidade = "São Paulo"

console.log(perfil1.idade)
console.log(perfil2.hobbies)
console.log(perfil3.ativo)
console.log(perfil1.cidade)
