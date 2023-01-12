const botoes = document.querySelectorAll(".btn");

botoes.forEach(function (botao) {
  let valor = botao.value;
  botao.addEventListener("click", function () {
    document.querySelector("#tela").innerHTML += valor;
  });
});

function off() {
  document.querySelector("#tela").innerHTML = "";
}

/*const botoes = document.querySelectorAll(".botao-inferior");


botoes.forEach(function(botao){
    let valor = botao.value;
    botao.addEventListener("click", function(){
        document.querySelector("#tela").innerHTML+=valor;
    })

})

function limpar(){
    document.querySelector("#tela").innerHTML="";
}*/
