const input = require('readline-sync');
let firstNumber = 0, secondNumber = 0, result = 0, resultModule;

do {
    resultModule = 0
    console.log('==== Calculadora ====\n')
    firstNumber = Number(input.question('Informe o primeiro numero: '))
    secondNumber = Number(input.question('Informe o segundo numero: '))
    
    console.log('\nOperacoes: ')
    console.log('1 - Soma')
    console.log('2 - Subtracao')
    console.log('3 - Multiplicacao')
    console.log('4 - Divisao')
    let operation = Number(input.question('Informe a operacao: '))
    
    switch(operation) {
        case 1: 
            result = firstNumber + secondNumber
            break
        case 2: 
            result = firstNumber - secondNumber
            break;
        case 3: 
            result = firstNumber * secondNumber
            break
        case 4:
            if (firstNumber === 0 || secondNumber === 0) {
                console.log('\nDivisão por zero!\nTente novamente!\n')
            } else {
                result = firstNumber / secondNumber
                resultModule = firstNumber % secondNumber
            }
            break;
    }

} while (firstNumber == 0 || secondNumber == 0)

console.log('\n=====================')
console.log(`\nResultado: ${result}\n`)
if (resultModule !== 0) 
    console.log(`Modulo da divisao: ${resultModule}\n`)
