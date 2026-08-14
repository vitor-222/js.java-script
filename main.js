 const numetoSenha=document.querySelector('.parametro-senha__titulo');
 let tamanhoSenha = 12;
 numeroSenha.textContent = tamanhoSenha

 const botoes = document.querySelectorAll('.parametro-senha__botao');

 botoes[0].onlick = diminuiTamanho;
 fuction diminuiTamanho(){
tamanhoSenha = tamanhoSenha-1;
 }
  
    console.console.log(botoes);    

 