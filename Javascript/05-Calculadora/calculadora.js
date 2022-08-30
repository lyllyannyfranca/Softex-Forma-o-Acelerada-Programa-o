let firstNumber, secondNumber, operation, result, resultModule = 0;

do {
    firstNumber = Number(prompt("Informe o primeiro número: "));
    secondNumber = Number(prompt("Informe o segundo número: "));
    operation = prompt("Informe a operação que deseja realizar:\n+\n-\n*\n/\n: ");
    
    switch(operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-": 
            result = firstNumber - secondNumber;
            break;
        case "*": 
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (firstNumber == 0 || secondNumber == 0) {
                alert('Divisão por zero! Tente novamente!');
            } else {
                result = firstNumber / secondNumber;
                resultModule = firstNumber % secondNumber;
            }
            break;            
    }

} while(firstNumber == 0 || secondNumber == 0);


let queryResult = document.getElementsByTagName('p');

queryResult[0].innerText = `O primeiro número foi: ${firstNumber}`;
queryResult[1].innerText = `O segundo número foi: ${secondNumber}`;
queryResult[2].innerText = `A operação escolhida foi: ${operation}`;
queryResult[3].innerHTML = `<strong> Resultado: </strong> ${result}`;
if (resultModule !== 0) {
    queryResult[3].innerHTML += `<p><strong>Módulo da divisão: </strong> ${resultModule}</p>`;    
} 
