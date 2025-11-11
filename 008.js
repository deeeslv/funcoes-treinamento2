//Melhorando o código anterior
//Anteriormente falei que objeto é aquilo que a função gera, não necessariamente
//Objeto é o conteúdo da variável e ele pode existir com ou sem a função
let usuarioTeste = {
    nome: "André",
    email: "andre@gmail.com",
    senha: "andre123",
    idade: 21
}

function validarUsuario(usuario){
    let erros = []

    if(usuario.nome.length < 2 ) erros.push("Nome inválido!")
    if(!usuario.email.includes("@")) erros.push("E-mail inválido")
    if(usuario.senha.length < 6) erros.push("Senha inválida!")
    if(usuario.idade < 18) erros.push("Idade não permitida!")

    return{
        válido: erros.length === 0,
        erros: erros
    }
}

let res = validarUsuario(usuarioTeste)

console.log(res)