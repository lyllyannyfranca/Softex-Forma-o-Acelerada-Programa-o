full_name = input("Informe seu nome completo: ")
scape = True
while scape:
    try:
        birth_year = int(input("Informe seu ano de nascimento: "))
        if birth_year >= 1922 and birth_year <= 2021:
            age = 2022 - birth_year
            print(f"Nome completo: {full_name}")
            print(f"Idade: {age}")
        else:
            raise
    except Exception:
        print("Dados invalidos")
    else:
        scape = False
