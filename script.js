// efeito de digitação animada
const texto = "Olá, eu sou Desenvolvedor Front-End!";
const typing = document.querySelector(".typing");
let i = 0;

function digitando() {
    if (i < texto.length) {
        typing.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitando, 70);
    }
}
digitando();


// botão scroll
function scrollToProjetos(){
    document.getElementById("projetos").scrollIntoView({behavior: "smooth"});
}


// mostrar mais no Sobre
function toggleSobre(){
    const texto = document.querySelector(".textoMais");
    texto.style.display = texto.style.display === "block" ? "none" : "block";
}


// formulário
function enviarWhatsapp(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("mensagem").value;

    // coloque seu número aqui:
    const telefone = "5522998333868";

    const texto = `Olá!%0AMeu nome é: ${nome}%0AEmail: ${email}%0AMensagem: ${msg}`;

    window.open(`https://wa.me/${telefone}?text=${texto}`, "_blank");
}

