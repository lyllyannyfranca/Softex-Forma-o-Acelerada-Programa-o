class complex_number:
    def __init__(self, a, b, c, d, e, f):
        self.a = complex(a, b)
        self.b = complex(c, d)
        self.c = complex(e, f)
    def sum_operation(self):
        return (self.a) + (self.b) + (self.c)
    def subtraction_operation(self):
        return (self.a) - (self.b) - (self.c)
    def multiplication_operation(self):
        return (self.a) * (self.b) * (self.c)
    def division_operation(self):
        return (self.a) / (self.b) / (self.c)
    def show_real_and_imaginary_numbers(self):
        message = f"\nNúmero complexo a: {self.a}\n"
        message += f"Número real de a: {self.a.real}\n"
        message += f"Número imaginário de a: {self.a.imag}\n\n"
        message += f"Número complexo b: {self.b}\n"
        message += f"Número real de b: {self.b.real}\n"
        message += f"Número imaginário de b: {self.b.imag}\n\n"
        message += f"Número complexo c: {self.c}\n"
        message += f"Número real de c: {self.c.real}\n"
        message += f"Número imaginário de c: {self.c.imag}\n"
        return message

answer = True
print("=== Números complexos ===\n")
while answer:
    a = int(input("Informe um número real para o número complexo a: "))
    b = int(input("Informe um número imaginário para o número complexo a: "))
    c = int(input("Informe um número real para o número complexo b: "))
    d = int(input("Informe um número real para o número complexo b: "))
    e = int(input("Informe um número real para o número complexo c: "))
    f = int(input("Informe um número real para o número complexo c: "))
    
    cn = complex_number(a, b, c, d, e ,f)
    print(cn.show_real_and_imaginary_numbers())
    print("=== Operações ===\n")
    print(f"==> Soma: {cn.sum_operation()}")
    print(f"==> Subtração: {cn.subtraction_operation()}")
    print(f"==> Multiplicação: {cn.multiplication_operation()}")
    print(f"==> Divisão: {cn.division_operation()}\n")
    
    option = input("Deseja continuar (S - Sim | N - Não)? ")
    
    if option == "N" or option == "n":
        answer = False
