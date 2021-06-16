var nome= "JPauli";
var cargo= "Developer";
var sobremim= "Sou um filmmaker abrendendo sobre web development e programação.";
var sobremim2= "Tenho 19 anos e estou começando o ensino superior.";


var cargoHtml= document.getElementById("cargo-no-html");
var nomeHtml= document.getElementById("nome-no-html");
var texto2= document.getElementById("texto-2");
var texto1= document.getElementById("texto-1");
var sobreMimHtml= document.getElementById("sobremim1");
var sobreMim2Html= document.getElementById("sobremim2");

function colocarSobreMimNoHtml(sobremim){
    sobreMimHtml.innerHTML = sobremim

}

colocarSobreMimNoHtml(sobremim);

function colocarSobreMim2NoHtml(sobremim2){
    sobreMim2Html.innerHTML = sobremim2

}

colocarSobreMim2NoHtml(sobremim2);



function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;

}

colocarNomeNoHtml(nome);

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;

}

colocarCargoNoHtml(cargo);

function clickNoProjetos (){
    console.log ("clicou no botão projetos")
    texto2.style.display = "block";
    texto1.style.display = "none";

}

function clickNoSobre (){
    console.log ("clicou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";

}

