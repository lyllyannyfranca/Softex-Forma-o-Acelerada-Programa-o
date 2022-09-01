//import da biblioteca readline-sync para capturar os dados do teclado via console
const input = require('readline-sync')

// Faz o cálculo do IMC: peso / (altura * altura)
function imc(weight, height) {
    return weight / (height * height)
}

/* A classificação de Índice de Massa Corporal(IMC) é a seguinte: 
   Entre 18,5 e 24,9 ---> Normal
   Entre 25,5 e 29,9 ---> Sobrepeso
   Entre 30,0 e 40,0 ---> Obesidade
   Acima de 40,0 ---> Obesidade grave
   
   Fonte: https://www.saudenaosepesa.com.br/diagnostico.html?utm_source=g-search&utm_medium=cpc&utm_content=texto&utm_term=normal&utm_campaign=ogilvybr_novo-nordisk_always-on-performance_g-search_cliques_202205_texto_cpc_calcule-imc&gclid=CjwKCAjwsMGYBhAEEiwAGUXJaZKEcrHe1QS-i3h5ykprD-eyT6-RpxpYRMRfGlC5ME2Nbm8rMZaPDRoC9poQAvD_BwE
*/
//Obtém a classificação de IMC
const classification = imc => {
    if (imc >= 18.5 && imc <= 24.9) return 'Normal'
    else if (imc >= 25 && imc <= 29.9) return 'Sobrepeso'
    else if (imc >= 30 && imc <= 40) return 'Obesidade'
    else if (imc > 40) return 'Obesidade grave'
}

//Função principal do programa
function main() {
    console.log('==== CALCULO IMC ====\n')
    let name = input.question('Informe seu nome: ')
    let weight = input.question('Informe seu peso: ')
    let height = input.question('Informe sua altura: ')
    let resultIMC = imc(weight, height)
    console.log(`\n${name}, seu IMC foi: ${resultIMC}\nClassificação: ${classification(resultIMC)}\n`)
    console.log('======================')
}

//Chamada a função principal
main()
