    function validarUsuario(usuario){
    let erros = []

    if (usuario.nome.length < 2) erros.push("Nome inválido")
    if (!usuario.email.includes("@")) erros.push("E-mail inválido")
    if (usuario.senha.length < 6) erros.push("Senha inválida")
    if (usuario.idade < 18) erros.push("Apenas maiores de 18!")

    return {
        valido: erros.length === 0,
        erros: erros
    }
} 

let usuarioTeste = {
    nome: "A",
    email: "semarroba",
    senha: "123", 
    idade: 15
}

let res = validarUsuario(usuarioTeste)

console.log(res)
//Acabei não conseguindo fazer sozinho, mas preciso refazer o exercício para entender melhor a lógica.
//É simples, mas preciso praticar mais.