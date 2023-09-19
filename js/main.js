let sildeElement =document.querySelector("#silder");
let buttonElement=document.querySelector("#button");
let valor=document.querySelector("#valor");
let senha=document.querySelector("#senha");
let conteinerSenha=document.querySelector("#conteiner-senha");
let carcter="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*";
let novaSenha="";

valor.innerHTML=sildeElement.value;

sildeElement.addEventListener('input', () => {
    valor.textContent = silder.value;
});
function geradorSenha(){
    let pass="";
    for(let i = 0; n=carcter.length, i <sildeElement.value; i++){
        pass+=carcter.charAt(Math.floor(Math.random()*n));
       
    } 
    conteinerSenha.classList.remove("hide");
    senha.innerHTML=pass;
}
senha.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = senha.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    tooltip.textContent = 'Senha copiada!';
});