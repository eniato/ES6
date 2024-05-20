
const alunos = [
    { nome: 'Maria', nota: 7.5 },
    { nome: 'Bruno', nota: 3.0 },
    { nome: 'Carlos', nota: 6.2 },
    { nome: 'Daniela', nota: 8.0 },
    { nome: 'Eduardo', nota: 4.8 }
];


function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);

