def input_data():
    number1 = int(input("Informe o primeiro numero: "))
    number2 = int(input("Informe o segundo numero: "))
    return number1, number2

def calculator(operator):
    if operator == 1:
        number1, number2 = input_data()
        return f"Resultado: {number1 + number2}"
    elif operator == 2:
        number1, number2 = input_data()
        return f"Resultado: {number1 - number2}"
    elif operator == 3:
        number1, number2 = input_data()
        return f"Resultado: {number1 * number2}"
    elif operator == 4:
        number1, number2 = input_data()
        if number1 == 0 or number2 == 0:
            return "Divisão por zero!\nOperação invalida!"
        else:
            return f"Resultado: {number1 / number2}"
    elif operator == 0:
        return ""
    else:
        return "Essa opção não existe"
        
operator = 1        
while (operator != 0):
    print("1. Soma")
    print("2. Subtração")
    print("3. Multiplicaçao")
    print("4. Divisão")
    print("0. Sair")
    operator = int(input("Informe a operação que deseja realizar: "))
    print(calculator(operator))
