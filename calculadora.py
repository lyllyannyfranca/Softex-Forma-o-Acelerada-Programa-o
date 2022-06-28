def calculator(number1, number2, operator):
    if operator == 1:
        return number1 + number2
    elif operator == 2:
        return number1 - number2
    elif operator == 3:
        return number1 * number2
    elif operator == 4:
        if number1 == 0 or number2 == 0:
            return "Divisão por zero!\nOperação invalida!"
        else:
            return number1 / number2
    else:
        return 0
        
first_number = float(input("Informe o primeiro número: "))  
second_number = float(input("Informe o segundo número: "))
print("Operações: ")
print("1. Soma")
print("2. Subtração")
print("3. Multiplicaçao")
print("4. Divisão")
operator = int(input("Informe a operação que deseja realizar: "))
print(calculator(first_number, second_number, operator))
