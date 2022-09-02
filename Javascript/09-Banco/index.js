// import da biblioteca readline-sync para captura de informações do teclado do usuario
const input = require('readline-sync')

// função construtora do objeto Bank
function Bank(account, type_account, agency) {
    this.account = account
    this.balance = 0
    this.type_account = type_account
    this.agency = agency

    this.get_balance = function () { return this.balance }
    this.deposit = function (value) { this.balance += value }
    this.withdraw = function (value) {
        try {
            /* verifica se o valor a ser sacado é maior do que o existente na conta. 
            Se for, lança uma exceção. 
            Caso contrario, prossegue com o saque normalmente.*/
            if (value > this.balance) throw ('Saldo insuficiente!\n')
            else this.balance -= value
        } catch (error) {
            console.log('\nErro: ', error) //tratamento da exceção
        }
    }
    this.get_account = function () { return this.account }
    this.get_agency = function () { return this.agency }
    this.get_type_account = function () { return this.type_account } 
    this.information_account = function() {
        console.log('\n=========================\n')
        console.log('Informacoes da conta: ')
        console.log('Numero da conta:', this.get_account())
        console.log('Saldo: R$', this.get_balance())
        console.log('Tipo da conta:', this.get_type_account())
        console.log('Numero da agencia:', this.get_agency())
        console.log('\n=========================\n')
    }
}

function menu() {
    console.log('=== CADASTRO CONTA ====\n')
    console.log('[1] - Cadastro')
    console.log('[2] - Deposito')
    console.log('[3] - Saque')
    console.log('[4] - Extrato')
    console.log('[0] - Sair')
}

// função principal
function main() {
    let option = 0 
    let bank = null
    do {
        menu()
        option = Number(input.question('Informe uma das opcoes (apenas numero): '))
        
        switch(option) {
            case 1: 
            let account = Number(input.question('Informe o numero da conta: '))
            let type_account = input.question('Informe o tipo da conta: ')
            let agency = Number(input.question('Informe o numero da agencia: '))
            
            bank = new Bank(account, type_account, agency) // instancia um novo objeto Bank com os dados passados pelo usuario
            
            console.log('\nCadastro realizado com sucesso!')
            console.log('\n=========================\n')
            break
            case 2:
                // verifica se já existe um objeto Bank criado
                if (bank === null) console.log('Realize o cadastro primeiramente para depositar um valor!') 
                else bank.deposit(Number(input.question('Informe o valor a ser depositado: ')))
                console.log('\n=========================\n')
                break
                case 3: 
                // verifica se já existe um objeto Bank criado
                if (bank === null) console.log('Realize o cadastro primeiramente para sacar um valor!') 
                else bank.withdraw(Number(input.question('Informe o valor a ser sacado: ')))
                console.log('\n=========================\n')
                break
                case 4: 
                // verifica se já existe um objeto Bank criado
                if(bank === null) console.log('Realize o cadastro primeiramente para conferir os dados da conta!') 
                else bank.information_account()
                break
                case 0: 
                console.log('\n[Terminal encerrado]')
                console.log('\n=========================\n')
                break
                default:     
                console.log('Opcao invalida!')
                break
            }

        } while (option !== 0);
    }
    
    // ----------------------------------------------------------------------------------------------------------------

// chamada a função principal    
main()
