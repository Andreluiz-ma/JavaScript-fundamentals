//tipo de dado
//booleanos

//conversao implicita
const number = 123;
const numberString = "123"

console.log(number == numberString)
console.log(number + numberString)

//conversao explicita
//Number   convert string to number
//String   convert number to string

console.log(number + Number(numberString))
//ou
// const numberString = Number("123")