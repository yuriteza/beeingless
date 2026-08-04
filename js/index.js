const fundo = document.getElementById("background-circles");

for (let i = 0; i < 30; i++) {

    const circulo = document.createElement("div");

    circulo.classList.add("circle");

    // Metade preenchido e metade apenas com borda
    circulo.classList.add(Math.random() > 0.5 ? "fill" : "outline");

    // Tamanho aleatório
    const tamanho = Math.random() * 120 + 40;

    circulo.style.width = tamanho + "px";
    circulo.style.height = tamanho + "px";

    // Posição aleatória dentro da seção
    circulo.style.left = Math.random() * 100 + "%";
    circulo.style.top = Math.random() * 100 + "%";

    // Velocidade diferente para cada círculo
    circulo.style.animationDuration = (8 + Math.random() * 8) + "s";
    circulo.style.animationDelay = -(Math.random() * 8) + "s";

    fundo.appendChild(circulo);

}