class account_bank:
    quantity_accounts = 0
    def __init__(self, number):
        account_bank.quantity_accounts += 1
        self.number = number
        self.balance = 0
    def credit(self, value):
        if (value > 0):
            self.balance += value
        
ab = account_bank(123)
ab2 = account_bank(456)
ab3 = account_bank(789)
print(f"Número total de contas criadas: {account_bank.quantity_accounts}")
print(f"Número da primeira conta: {ab.number}")
print(f"Número da segunda conta {ab2.number}")
print(f"Número da terceira conta: {ab3.number}")
ab.credit(200)
ab2.credit(300)
ab3.credit(400)
print(f"Saldo da primeira conta: {ab.balance}")
print(f"Saldo da segunda conta: {ab2.balance}")
print(f"Saldo da terceira conta: {ab3.balance}")
