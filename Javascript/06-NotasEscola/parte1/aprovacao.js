let queryResult = document.getElementsByClassName('notes');

let result = 0;

for (let i = 0; i < queryResult.length; i++) {
    let notes = Number(prompt(`Informe a ${i+1}º nota: `));
    queryResult[i].innerText = `A ${i+1}º nota foi: ${notes}`;
    result += notes;
}

result /= 3;

queryResult = document.getElementsByTagName('p');

queryResult[3].innerHTML += `<strong>Média: </strong> ${result}`;

result >= 7 ? queryResult[4].innerHTML += 
`<h2>Resultado</h2><strong><mark>Aprovado!!</mark></strong>` : queryResult[4].innerHTML 
+= `<h2>Resultado</h2><strong><mark>Reprovado!!</mark></strong>`;


