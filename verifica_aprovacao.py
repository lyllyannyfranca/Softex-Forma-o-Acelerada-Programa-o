name_student = input("Informe seu nome: ")
first_note = float(input("Informe a primeira nota: "))
second_note = float(input("Informe a segunda nota: "))
average = (first_note + second_note)/2
quantity_absences = int(input("Informe a quantidade de faltas: "))

if average < 7.0:
    print(f"{name_student} está reprovado(a).")
elif quantity_absences > 3:
    print(f"{name_student} está reprovado(a).")
else:
    print(f"{name_student} está aprovado(a).")
