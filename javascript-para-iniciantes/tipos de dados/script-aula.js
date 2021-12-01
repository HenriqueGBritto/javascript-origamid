// String 

var nome = 'Andre';
var sobrenome = 'Rafael';
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romario fez ' + gols + 'gols';

console.log(typeof frase) // tudo vai se tornar string

var ano = '2018';
var mes = 8;

console.log(ano + mes) // como o primeiro é string e o segundo numero, ele não entende como soma, e sim como string

var frase1 = 'Esse é o melhor jogo'

var gols = 1000;
var frase2 = `Romario fez ${gols * 2} gols`;

console.log(frase2);
