
let codifica = document.querySelector("#do");
let descodifica = document.querySelector('#undo');
var campo = document.querySelector("input");
let result = document.querySelector("#result");

let str = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!?\@#$%&_-1234567890";

let texto = "";

campo.addEventListener('input', function(){
    texto = this.value;
    return texto;
});

function limpaCampo() {
    texto= "";
    palavraNova="";
    palavraOriginal="";
    campo.value="";
    result.value="";
    letras=[];
};

document.getElementById('input').addEventListener('keyup', (ev) => {
	const input = ev.target;
	input.value = input.value.toLowerCase();

});

function copyTo() {

    document.getElementById("result").select();
    document.execCommand('copy');
};

let letras = [];
let palavraNova = "";
let palavraOriginal = "";


