// conversão implícita
const numero = 123;
const numeroString = "123";

//console.log(numero === numeroString)
// = false
//console.log(numero == numeroString)
// = true

// conversão explícita

//Number()
//String()

console.log(numero + Number(numeroString))
// = 246
console.log(numeroString + String(numero))
// = 123123