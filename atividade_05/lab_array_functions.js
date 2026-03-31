// Atividade 1. FILTRO DE HASHTAGS
const tags = ["#vida", "#javascript", "#aula", "#js", "#café"];
const tagsJS = tags.filter(tag => tag.toLowerCase().includes("js"));
console.log("Atividade 1:", tagsJS);

// Atividade 2. FORMATADOR DE NOMES
const usuarios = ["aLeX", "mArIa", "jOãO", "bIa"];
const usuariosFormatados = usuarios.map(user => user.toLowerCase());
console.log("Atividade 2:", usuariosFormatados);

// Atividade 3. BUSCA DE CONVIDADOS
const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];
const convidadosPermitidos = convidados.filter(nome => nome.startsWith("A") && nome.length > 2);
console.log("Atividade 3:", convidadosPermitidos);

// Atividade 4. CORRETOR DE PREÇOS
const precos = [50, 100, 150, 200];
const precosComDesconto = precos.map(preco => preco - 10);
console.log("Atividade 4:", precosComDesconto);