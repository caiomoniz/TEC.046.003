class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual é
            R$ ${this.saldo} `)
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
    }
    // criar o método sacar e sacar 1000 reais da sua conta, e depois mostrar o saldo atualizado.
    sacar(valor) {
        this.saldo -= valor;
    }
}

let contaDoCaio = new ContaBancaria("Caio", 15000)
contaDoCaio.verSaldo() // 15k
contaDoCaio.depositar(350); // 15k + 350 = 15350
contaDoCaio.sacar(100)
contaDoCaio.verSaldo() // 15250

let contaDaCecilia = new ContaBancaria("Cecília", 1000000)
contaDaCecilia.verSaldo();
