let queryResult = document.getElementsByClassName('notes');

let result = 0;

for (let i = 0; i < queryResult.length; i++) {
    let notes = Number(prompt(`Informe a ${i+1}º nota: `));
    queryResult[i].innerText = `A ${i+1}º nota foi: ${notes}`;
    result += notes;
}

queryResult = document.getElementById('result');

//3 x 7 = 21, logo a soma minima com as 3 notas para obter aprovação
let approbation = (result - 21)*-1;

approbation <= 10 ? queryResult.innerHTML += 
`O aluno precisa tirar no mínimo <strong><mark> ${approbation}</mark></strong> na próxima prova para ser aprovado com 7.` : 
queryResult.innerHTML += `<p>Aluno <strong>reprovado</strong>!`;