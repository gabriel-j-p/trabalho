var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  somam();

});


//Função somar
function somar () {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let NUMERO = Number(document.getElementById("NUMERO").value);

var NUMERO = prompt ("digite o número");

var resultado = NUMERO % 2;

if (resultado == 0) {
  document.getElementById("o número é o par");
}

if (resultado != 0) {
  document.getElementById("o número é inpar");
}
  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma
  let resultado = primeiro_numero_inteiro;

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("resultado").value = resultado;


}
