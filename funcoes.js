//funções

function imprimeTexto(testo){
    console.log(testo)
}

imprimeTexto("oi")
imprimeTexto("Hi")

function soma(){
    return 2 + 2;
}

console.log(soma())

//parâmetros de função

// function somar(numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(somar(2, 2))
// console.log(somar(50, 22))

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(22, "andre"))

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))