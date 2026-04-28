class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar(som) {
        console.log(som);
    }
}

class Gato extends Animal {
    ronronar() {
        console.log(`${this.nome} está ronronando...`);
    }
}

class Cachorro extends Animal {
    abanarRabo() {
        console.log(`${this.nome} está feliz...`);
    }
}
    let rogerio = new Gato("Rogério");
    let iara = new Cachorro("Iara");

    rogerio.falar("Miau"); 
    rogerio.ronronar();
    iara.falar("Au Au");
    iara.abanarRabo();

class Hamster extends Animal {
    roer() {
        console.log(`${this.nome} está roendo...`);
    }
}
  let eric = new Hamster("Eric");
  eric.roer();