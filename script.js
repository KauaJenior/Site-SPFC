function alternarToggle(info1) {

    var info = document.getElementById(info1);
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

function mudarSeta(elemento) {
    var seta = elemento.querySelector('img');
    if (seta.src.endsWith("imagens/accordion_down.png")) {
        seta.src = "imagens/accordion_up.png";
    } else {
        seta.src = "imagens/accordion_down.png";
    }
}


