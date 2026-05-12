const dicas = [
    "Use a agricultura de precisão para evitar o desperdício de fertilizantes.",
    "O plantio direto ajuda a manter a umidade do solo e evita a erosão.",
    "A rotação de culturas quebra o ciclo de pragas e melhora a saúde da terra.",
    "Preserve as matas ciliares para proteger os rios da sua propriedade.",
    "Utilize energia solar para alimentar sistemas de irrigação."
];

function gerarDica() {
    const elemento = document.getElementById("texto-dica");
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    elemento.innerText = dicas[indiceAleatorio];
}
