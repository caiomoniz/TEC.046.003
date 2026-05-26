class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    hero_atacar(alvo, habilidade) {

        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) {
            alvo.hp = alvo.hp - habilidade.dano;
            // Debitar Mana
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 50;
            }
            // Debitar Energia
            if (habilidade.energia > 0) {
                this.energia = 0;
            }
        }
        else {
            return "Sem mana ou energia suficiente!";
        }
    }
    boss_atacar(alvo) {
        if (this.energia >= 100) {
            alvo.hp -= 15;
            this.energia = 0;
        } else {
            this.energia += 50;
        }
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
let hero = new Personagem("João Oliveira", "🦸🏻 Filou + Nescau Balls", 100, 100, 0);
let boss = new Personagem("Pep Cool", "💀 Mogged + Doritos", 100, 0, 50);
// Preencher os Status
document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo;
document.getElementById("hp-hero").value = hero.hp;
document.getElementById("mp-hero").value = hero.mana;
document.getElementById("en-hero").value = hero.energia;

document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;

//Criar Habilidades
let containerBtn = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 Skill", 8, 10, 0),
    new Habilidade(3, "💥 Supremo", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-outline-warning");
    containerBtn.appendChild(btn);
    btn.onclick = () => {
        hero.atacar_hero(boss, hab);
        atualizarTela();
    }
});
const atualizarTela = () => {
    console.log(boss.hp);
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("mp-hero").value = hero.mana;
    document.getElementById("en-hero").value = hero.energia;
}