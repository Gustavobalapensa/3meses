document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("mostrar");
    const imagem = document.getElementById("img1");
    const legenda = document.getElementById("legenda-surpresa");
    const contador = document.getElementById("contador");

    botao.addEventListener("click", function () {
        imagem.style.display = "block";
        legenda.style.display = "block";
        contador.style.display = "block";
    });

    function atualizarContador() {
        const dataInicio = new Date("2024-12-05T00:00:00").getTime();
        setInterval(() => {
            const agora = new Date().getTime();
            const diferenca = agora - dataInicio;

            const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
            const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            contador.innerHTML = `Estamos juntos há: ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
        }, 1000);
    }

    atualizarContador();
});
