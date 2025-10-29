function calcularDesconto(precoOriginal, percentualDesconto){
    let valorDesconto = precoOriginal * (percentualDesconto / 100)
    let precoFinal = precoOriginal - valorDesconto

    return {precoOriginal: precoOriginal ,valorDesconto: valorDesconto, precoFinal: precoFinal}
    //Estou instanciando (criando) um objeto e, ao mesmo tempo, colocando os valores calculados dentro dele.
    //Ou com as minhas palavras, descobri que estava instanciando o objeto já dentro da função
}

let res = calcularDesconto(100,10)//Quando eu chamo a função instancio o novo objeto
console.log(res)

//Me lembrando como o objeto é instanciado dentro do return
//Objeto é aquilo que a função gera