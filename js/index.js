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

/*=========================================================
    MENU DE NAVEGAÇÃO
=========================================================*/

document.getElementById("idhome").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../index.html";

});

document.getElementById("idnivel").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/niveis.html";

});

document.getElementById("idblog").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/blog.html";

});

document.getElementById("idtopicos").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/topicos.html";

});

document.getElementById("idexercicios").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/exercicios.html";

});

document.getElementById("idteste").addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../pages/teste_nivel.html";

});