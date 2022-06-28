quantity_wheels = int(input("Informe a quantidade de rodas do veículo: "))
brute_weight = float(input("Informe o peso bruto do veículo (em KG): "))
quantity_people = int(input("Informe a quantidade de pessoas que o veículo suporta: "))

if quantity_wheels == 2 or quantity_wheels == 3:
    print("A melhor categoria de habilitação para o veículo informado é: A")
elif quantity_wheels == 4 and quantity_people <= 8 and brute_weight <= 3500:
    print("A melhor categoria de habilitação para o veículo informado é: B")
elif quantity_wheels >= 4 and quantity_people > 8:
    print("A melhor categoria de habilitação para o veículo informado é: D")
elif quantity_wheels >= 4 and (brute_weight >= 3500 and brute_weight <= 6000):
    print("A melhor categoria de habilitação para o veículo informado é: C")
elif quantity_wheels >= 4 and brute_weight > 6000:
    print("A melhor categoria de habilitação para o veículo informado é: E")
