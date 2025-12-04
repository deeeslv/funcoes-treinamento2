let contaBancaria = {
    titular: "André",
    saldo: 0,

    depositar(valor){
        this.saldo += valor;
    },

    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!")
        }
    },

    verSaldo(){
        return `Saldo: R$${this.saldo}`
    }
}


contaBancaria.depositar(1000);
contaBancaria.sacar(370);
console.log(contaBancaria.verSaldo());
contaBancaria.sacar(630);
console.log(contaBancaria.verSaldo());