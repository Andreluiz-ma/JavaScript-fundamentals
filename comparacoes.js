//comparações 

// == comparação implicita

const number = 5;
const text = "5";

console.log (number == text)
//return true
// == compara apenas o valor

console.log (number === text)
//return false
//=== compara o valor e o tipo

//typeof
console.log(typeof number)
console.log(typeof text)

//boa pratica usar conversão explicita ao invez de ==

console.log(number >= 5 || text <=10)
// return true
// || ou, retorna true caso uma condição seja válida;

console.log(number >= 5 && text >= 10)
// return false
// && e, retorna true somente se todas as condições forem válidas;

console.log(number >= 5 != text >= 10)
// return true
// !=, comparação nao igual 

console.log(number >= 5 !== text <= 10)
// return false
// !==, comparação estritamente não igual