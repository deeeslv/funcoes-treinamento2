function transformarArray(numeros){
    let resultados = []

    for(let i = 0; i < numeros.length ; i++){

        let numero = numeros[i]
        let transformado

        if (numero % 2 === 0){
            transformado = numero * 2
        } else {
            transformado = numero + 1
        }

        resultados.push(transformado)

    }
    return resultados;
}

console.log(transformarArray([1, 2, 3, 4, 5]))