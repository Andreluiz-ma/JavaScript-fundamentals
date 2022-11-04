const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = alunos.slice(0, 10)
const sala2 = alunos.slice(10);
const sala3 = alunos.slice(0, alunos.length / 2)
// com .slice podemos dividir uma array sem alterar o original

console.log(sala1)
console.log(sala2)
console.log(sala3)