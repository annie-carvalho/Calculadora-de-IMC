
function calcularIMC(){

//Entrada de dados
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
let valorIMC = document.getElementById("valor-imc");
let classificacao = document.getElementById("classificacao");

if (!peso || !altura ||altura <=0) 
    {
    valorIMC.textContent = "Preencha os campos corretamente.";
    classificacao.textContent = "";
    return;
}

//Processamento
let imc = peso / (altura * altura);
valorIMC.textContent = "Seu IMC é:" + imc.toFixed(2);

if (imc < 18.5) {classificacao.textContent = "Classificação: Abaixo do peso";}
else if (imc < 24.9) {classificacao.textContent = "Classificação: Peso normal";}
else if (imc < 29.9) {classificacao.textContent = "Classificação: Sobrepeso";}
else if (imc < 34.9) {classificacao.textContent = "Classificação: Obesidade grau 1";}
else if (imc < 39.9) {classificacao.textContent = "Classificação: Obesidade grau 2";}
else {classificacao.textContent = "Classificação: Obesidade grau 3";}

}