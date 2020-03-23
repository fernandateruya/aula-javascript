/* Aula 1.1 - Introdução ao Java Script - parte 1

var nome = "Dona Cotinha";
idade1 = 99;
idade2 = 10;
idadefinal = idade1 + idade2;
contador = 0;
var frase =" Hoje está calor";
alert(nome + " tem " + idade1 + " anos");
console.log(nome);
console.log(idade1);
alert("Daqui 10 anos ela terá " + idadefinal + " anos");
console.log(idadefinal);
alert(frase);
console.log(frase);
contador++;
alert("Não... " + frase.replace("calor","frio"));
console.log(frase.replace("calor","frio"));
contador++;
alert(frase.toUpperCase() + "!!! É verdade esse bilhete!");
console.log(frase.toUpperCase() + "!!! É verdade esse bilhete!)");
contador++;
alert("Chega de falar do tempo! Você já falou " + contador + " vezes");
console.log(contador); */


// Aula 1.1 - Array e Dicionário - parte 2

/* 
alert("Vamos fazer uma lista de frutas.");
var lista = ["maça", "pera", "laranja"];
alert("As frutas dessa lista serão... " + lista);
console.log(lista);
alert("Assim está melhor... " + lista.join(" | "));
console.log(lista);
alert("A segunda fruta dessa lista é " + lista[1].toUpperCase());
console.log(lista[1]);
alert("A primeira letra de " + lista[1] + " é... " + lista[1][0].toUpperCase());
console.log(lista[1][0]);
alert("A ultima letra de " + lista[1] + " é... " + lista[1][3].toUpperCase());
console.log(lista[1][3]);
lista.push("uva");
alert("Vamos inserir mais uma fruta... " + lista[3].toUpperCase());
console.log(lista[3]);
alert("Agora a lista tem " + lista.length + " frutas e os item da lista são " + lista.join(" | "));
console.log(lista);
lista.pop();
alert("Vamos tirar a ultima fruta... ");
alert("Agora temos novamente " + lista.length + " itens na lista que são  " + lista.join(" | "));
console.log(lista.length);
console.log(lista.join);
alert("Essa lista ao contrario ficaria assim " + lista.reverse().join(" | ").toUpperCase());
console.log(lista.reverse());
alert("Vamos fazer uma lista de frutas com suas cores."); 
*/


// Aula 1.2 - Array e Dicionário 
/* 
var frutas = [{nome: "maça", cor: "vermelha"} , {nome: "pera", cor: "amarela"} , {nome: "uva", cor: "roxa"}];
alert("A primeira fruta dessa lista é " + frutas[0].nome.toUpperCase() + " e a cor dessa fruta é " + frutas[0].cor.toUpperCase());
console.log(frutas[0].nome + " " + frutas[0].cor)
alert("A segunda fruta dessa lista é " + frutas[1].nome.toUpperCase() + " e a cor dessa fruta é " + frutas[1].cor.toUpperCase());
console.log(frutas[1].nome + " " + frutas[1].cor)
alert("A terceira fruta dessa lista é " + frutas[2].nome.toUpperCase() + " e a cor dessa fruta é " + frutas[2].cor.toUpperCase());
console.log(frutas[2].nome + " " + frutas[2].cor)
 */


// Aula 1.3 - Condicionais, laços de repetição e Date - parte 1


/* 
var idade = prompt("Qual a sua idade? ");
if (idade >= 18) {
    alert("Você já pode acessar esse site =) ")
}
else{
    alert("Você só pode acessar esse site... daqui a " + (18 - idade ) + " anos =(")
}   
*/  



// Aula 1.3 - Condicionais, laços de repetição e Date - parte 2


/* 
var count = 3;

while (count>=1){
    alert("Vamos começar em " + count);
    count--;
}
alert("Começou!!!!!!"); */



// Aula 1.3 - Condicionais, laços de repetição e Date - parte 3

/* 
var count;

for(count = 3; count >= 1; count --){
    alert("Vamos começar em " + count);
}
alert("Começou!!!!!!"); */

//Aula 1.3 - Condicionais, laços de repetição e Date  - parte 4


/* 
var d = new Date()

alert("Hoje é " + d);
alert("Dia " + d.getDay() + " do mês " + (d.getMonth() + 1) + " do ano de " + d.getFullYear());
alert("A hora certa é " + d.getHours() + " horas e " + d.getMinutes() + " minutos.")
 */

//Aula 2.1 - Desenvolva páginas web com JavaScript  - parte 1


/* 
alert("Vamos escrever uma função para somar 2 números!")

var n1 = prompt("Digite um número qualquer: ");
var n2 = prompt("Agora digite um outro número:"); 


function soma(n1, n2){
    return(parseInt(n1) + parseInt(n2));
};

alert("A soma desses números é... " + soma(n1, n2));
 */

//Aula 2.1 - Desenvolva páginas web com JavaScript  - parte 2


/* 

alert("Agora vamos escrever uma função para calcular a média de 2 números!")


var a1 = prompt("Digite o primeiro número : ");
var a2 = prompt("Agora digite o segundo número:"); 



function media(a1, a2){
    divisor = 2;
    return((parseInt(a1) + parseInt(a2)) / divisor);
};

alert("A media desses números é... " + media(a1, a2)); 
*/


//Aula 2.2 - Manipulando elementos da página


function botao1(){
    document.getElementById("mensagem1").innerHTML = "<b>Obrigada por clicar!</b>"
    console.log(document.getElementById("mensagem1"));
}

function botao2(){
    document.getElementById("mensagem2").innerHTML = "<b>Obrigada por clicar!</b>"
    console.log(document.getElementById("mensagem2"));
    redirecionar_pagina_nova()
}

function redirecionar_pagina_nova(){
    alert("A página da Digital One será aberta em uma NOVA aba do seu navegador")
    window.open("https://digitalinnovation.one/")
}

function redirecionar_pagina_atual(){
    alert("Abriremos a página da Digital One na aba ATUAL do seu navegador")
    window.location.href = "https://digitalinnovation.one/"    
}

function vermelho(elemento){
    elemento.innerHTML = "<font color=#FF0000><i><b> Você é o nosso cliente de numero 1000!!! </b><i></font>";
}

function azul(elemento){
    elemento.innerHTML = "<font color=#0000FF><i><b> Você acaba de ganhar um PREMIO!!! </b><i></font>";
}


function preto(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function caixadeselecao(elemento){
    alert("Ok! Entraremos em contato por " + elemento.value)
}














