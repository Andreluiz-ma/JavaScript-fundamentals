// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// const media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(media);

//arrays

// const notas = [10, 6.5, 8, 7.5];

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media);

//adicionando elementos na array(ultima posição)

// const notas = [10, 6, 8];

// notas.push(7);
// com .push conseguimos adicionar valores a uma array na ultima posição.

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(notas);
// console.log(media);

//adicionando elementos na array(primeira posição)

// const notas = [10, 6, 8];

// notas.unshift(7);
// com .unshift conseguimos adicionar valores a uma array na primeira posição.

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(notas);
// console.log(media);

//removendo o ultimo elemento da array

// const notas = [10, 6, 8, 5.5, 9];

// notas.pop();
// com .pop removemo o ultimo elemento da array/ mostra o ultimo elemento.

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(notas.pop());
// console.log(media);

//removendo o primeiro elemento da array

const notas = [10, 6, 8, 5.5, 9];

notas.shift();
//com .shift removemos o primeiro elemento da array/ mostra o primeiro elemento.

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas.shift());
console.log(media);
