/* 
1- Quando usuário clicar no botão do trailer, abrir o modal com o vídeo
    1.1 Pegar o elemento do botão no HTML
    1.2 Identificar quando o botão for clicado
    1.3 Pegar a modal no JS
    1.4 Abrir a modal na tela
    
    2- Quando usuário clicar no X, fechar a modal
    2.1 Pegar o elemento de fechar a modal
    2.2 Identificar quando usuário clicar no X
    2.3 Fechar a modal 
*/
   
const botaoTrailer = document.querySelector(".botao-trailer");
const fecharModal = document.querySelector(".fechar-modal");
const videoModal = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    videoModal.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {
    alternarModal();
    videoModal.setAttribute("src", "");
});
