function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.linkedin.com/feed/"); //abre em outra aba
    //window.location.href = "https://www.linkedin.com/feed/"; //abre na mesma aba
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    //alert("Página carregada");
}

function change(elemento) {
    console.log(elemento.value)
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

//alert(soma(5, 10));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
*/

/*
var count;
for (count = 0; count < 5; count++) {
    console.log(count);
}
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};
*/

/*
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*
var nome = "Lucas Moraes";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);

console.log(nome);
console.log(idade);
console.log(idade2);
console.log(idade / idade2);
console.log(frase.replace("Japão", "Brasil").toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
*/