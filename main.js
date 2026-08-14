 const numetoSenha=document.querySelector('.parametro-senha__titulo');
 let tamanhoSenha = 12;
 numeroSenha.textContent = tamanhoSenha

 const botoes = document.querySelectorAll('.parametro-senha__botao');

 botoes[0].onlick = diminuiTamanho;
  botoes[1].onlick = aumentaTamanho;
 
 fuction diminuiTamanho(){
tamanhoSenha = tamanhoSenha-1;
 numeroSenha.textContent = tamanhoSenha;
 }
 function aumentaTamanho() {
    tamanhoSenha = tamanhoSenha+1; 
    numeroSenha. textContent= tamanhoSenha
 } 
    console.console.log(botoes);    

 