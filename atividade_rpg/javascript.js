class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// Instancia Classes - Criar Objetos
let hero = new Personagem("João Oliveira", "🦸🏻 Filou + Nescau Balls", 100,100,0);
let boss = new Personagem("Pep Cool", "💀 Mogged + Doritos", 100,0,50);
// Preencher os Status
document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo;
document.getElementById("hp-hero").value = hero.hp;
document.getElementById("mp-hero").value = hero.mana;
document.getElementById("en-hero").value = hero.energia;

document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;
document.getElementById("hp-boss").value = boss.hp;
document.getElementById("mp-boss").value = boss.mana;
document.getElementById("en-boss").value = boss.energia;

//Criar Habilidades
let listaHabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 Skill", 8, 10, 0),
    new Habilidade(3, "💥 Supremo", 15, 0, 100)
];