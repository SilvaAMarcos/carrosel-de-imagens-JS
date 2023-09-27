var numeroConteudo = 1;

const botaoSetaEsquerda = document.getElementsByClassName("setaEsquerda")[0];
botaoSetaEsquerda.addEventListener('click', function () {
    return movimentaCarrosel("esquerda");
})

const botaoSetaDireita = document.getElementsByClassName("setaDireita")[0];
botaoSetaDireita.addEventListener('click', function () {
    return movimentaCarrosel("direita");
})


function movimentaCarrosel(valorSeta) {
    let imagemConteudo = '';
    let tituloConteudo = '';
    let saibaMaisConteudo = '';
    let setaDirecionalEsquerda = '';
    let setaDirecionalDireita = '';

    const objetoConteudo = {
        conteudo1: {
            imagebg: "imagemprimeira.png",
            title: "Titulo imagem 1",
            cor: "#C50000",
        },
        conteudo2: {
            imagebg: "imagemsegunda.png",
            title: "Titulo imagem 2",
            cor: "#D9DD10",
        },
        conteudo3: {
            imagebg: "imagemterceira.png",
            title: "Titulo imagem 3",
            cor: "#A63A17",
        },
        conteudo4: {
            imagebg: "imagemquarta.png",
            title: "Titulo imagem 4",
            cor: "#10ACDD",
        }
    };

    if (valorSeta === "direita" && numeroConteudo === 1) {
        numeroConteudo += 1;
        imagemConteudo = objetoConteudo.conteudo2.imagebg;
        tituloConteudo = objetoConteudo.conteudo2.title;
        saibaMaisConteudo = objetoConteudo.conteudo2.cor;
        setaDirecionalEsquerda = 'setaesquerda.png';
        setaDirecionalDireita = 'setadireita.png';
        return realizaAlteracao(imagemConteudo, tituloConteudo, 
            saibaMaisConteudo, setaDirecionalEsquerda, setaDirecionalDireita);

    } else if (valorSeta === "direita" && numeroConteudo === 2) {
        numeroConteudo += 1;
        imagemConteudo = objetoConteudo.conteudo3.imagebg;
        tituloConteudo = objetoConteudo.conteudo3.title;
        saibaMaisConteudo = objetoConteudo.conteudo3.cor;
        setaDirecionalEsquerda = 'setaesquerda.png';
        setaDirecionalDireita = 'setadireita.png';
        return realizaAlteracao(imagemConteudo, tituloConteudo, 
            saibaMaisConteudo, setaDirecionalEsquerda, setaDirecionalDireita);

    } else if (valorSeta === "direita" && numeroConteudo === 3) {
        numeroConteudo += 1;
        imagemConteudo = objetoConteudo.conteudo4.imagebg;
        tituloConteudo = objetoConteudo.conteudo4.title;
        saibaMaisConteudo = objetoConteudo.conteudo4.cor;
        setaDirecionalEsquerda = 'setaesquerda.png';
        setaDirecionalDireita = 'setadireitaopaca.png';
        return realizaAlteracao(imagemConteudo, tituloConteudo, 
            saibaMaisConteudo, setaDirecionalEsquerda, setaDirecionalDireita);

    }

    // ========= mover para esquerda ==================

    else if (valorSeta === "esquerda" && numeroConteudo === 2) {
        numeroConteudo -= 1;
        imagemConteudo = objetoConteudo.conteudo1.imagebg;
        tituloConteudo = objetoConteudo.conteudo1.title;
        saibaMaisConteudo = objetoConteudo.conteudo1.cor;
        setaDirecionalEsquerda = 'setaesquerdaopaca.png';
        setaDirecionalDireita = 'setadireita.png';
        return realizaAlteracao(imagemConteudo, tituloConteudo, 
            saibaMaisConteudo, setaDirecionalEsquerda, setaDirecionalDireita);

    } else if (valorSeta === "esquerda" && numeroConteudo === 3) {
        numeroConteudo -= 1;
        imagemConteudo = objetoConteudo.conteudo2.imagebg;
        tituloConteudo = objetoConteudo.conteudo2.title;
        saibaMaisConteudo = objetoConteudo.conteudo2.cor;
        setaDirecionalEsquerda = 'setaesquerda.png';
        setaDirecionalDireita = 'setadireita.png';
        return realizaAlteracao(imagemConteudo, tituloConteudo, 
            saibaMaisConteudo, setaDirecionalEsquerda, setaDirecionalDireita);

    } else if (valorSeta === "esquerda" && numeroConteudo === 4) {
        numeroConteudo -= 1;
        imagemConteudo = objetoConteudo.conteudo3.imagebg;
        tituloConteudo = objetoConteudo.conteudo3.title;
        saibaMaisConteudo = objetoConteudo.conteudo3.cor;
        setaDirecionalEsquerda = 'setaesquerda.png';
        setaDirecionalDireita = 'setadireita.png';
        return realizaAlteracao(imagemConteudo, tituloConteudo, 
            saibaMaisConteudo, setaDirecionalEsquerda, setaDirecionalDireita);
    }
}

function realizaAlteracao(imagemConteudo, tituloConteudo, saibaMaisConteudo, 
    setaDirecionalEsquerda, setaDirecionalDireita) {
    const main = document.getElementById("main");
    const titulo = document.getElementById("titulo");
    const saibaMais = document.getElementById("saibaMais");
    const setaEsquerda = document.getElementById("setaEsquerda");
    const setaDireita = document.getElementById("setaDireita");

    main.style.backgroundImage = `url('images/${imagemConteudo}')`;
    titulo.innerHTML = tituloConteudo;
    saibaMais.style.color = saibaMaisConteudo;
    setaEsquerda.setAttribute('src', './images/' + setaDirecionalEsquerda);
    setaDireita.setAttribute('src', './images/' + setaDirecionalDireita);

}
