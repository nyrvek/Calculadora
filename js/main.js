/* 
script Anterior
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
*/
function insert(num) {
  var numero = document.querySelector("#tela").innerHTML;
  document.querySelector("#tela").innerHTML = numero + num;
}
function clean() {
  document.querySelector("#tela").innerHTML = "";
}
function on() {
  document.querySelector("#tela").innerHTML = "--------ON-------";
}

function calcular() {
  var resultado = document.querySelector("#tela").innerHTML;
  if (resultado) {
    document.querySelector("#tela").innerHTML = eval(resultado);
  } else {
    document.querySelector("#tela").innerHTML = "Nada...";
  }
}
