from enum import IntEnum

class Candidate(IntEnum): 
    X = 889,
    Y = 847,
    Z = 515,
    WHITE = 0
    
def show_menu():
    print('=== VOTAÇÃO ===')
    print('Candidatos: ')
    print('889 - Candidato_X')
    print('847 - Candidato_Y')
    print('515 - Candidato_Z')
    print('0 - Branco')
    print('Digite o número do candidato: ')

def compute_vote(vote):
    if vote == Candidate.X.value:
        print(f"Você votou no Candidato_{Candidate.X.name}")
        print('Deseja confirmar o voto?')
        print('1 - Sim')
        print('2 - Não')
        print('Digite a opção: ')
    elif vote == Candidate.Y.value:
        print(f"Você votou no Candidato_{Candidate.Y.name}")
        print('Deseja confirmar o voto?')
        print('1 - Sim')
        print('2 - Não')
        print('Digite a opção: ')
    elif vote == Candidate.Z.value:
        print(f"Você votou no Candidato_{Candidate.Z.name}")
        print('Deseja confirmar o voto?')
        print('1 - Sim')
        print('2 - Não')
        print('Digite a opção: ')
    elif vote == Candidate.WHITE.value:
        print(f"Você votou em branco")
        print('Deseja confirmar o voto?')
        print('1 - Sim')
        print('2 - Não')
        print('Digite a opção: ')
    else:
        print(f"Você votou nulo")
        print('Deseja confirmar o voto?')
        print('1 - Sim')
        print('2 - Não')
        print('Digite a opção: ')
        
def close_votation():
    print('Deseja finalizar a votação?')    
    print('1 - Sim')
    print('2 - Não')
    print('Digite a opção: ')
    
answer = 0
counter_candidate_x = 0
counter_candidate_y = 0
counter_candidate_z = 0
counter_white = 0
counter_null = 0
while answer != 1:
    show_menu()
    try:
        vote = int(input())
        compute_vote(vote)
        answer = int(input())
        if vote == Candidate.X.value:
            if answer == 1:
                counter_candidate_x += 1
                close_votation()
                answer = int(input())
        elif vote == Candidate.Y.value:
            if answer == 1: 
                counter_candidate_y += 1
                close_votation()
                answer = int(input())
        elif vote == Candidate.Z.value:
            if answer == 1: 
                counter_candidate_z += 1
                close_votation()
                answer = int(input())
        elif vote == Candidate.WHITE.value:
            if answer == 1: 
                counter_white += 1
                close_votation()
                answer = int(input())
        else:
            if answer == 1: 
                counter_null += 1
                close_votation()
                answer = int(input())
                
        if (counter_candidate_x > counter_candidate_y) and (counter_candidate_x > counter_candidate_z):
            print(f"Vencedor: Candidato_{Candidate.X.name}")
        elif (counter_candidate_y > counter_candidate_z) and (counter_candidate_y > counter_candidate_x):
            print(f"Vencedor: Candidato_{Candidate.Y.name}")
        else: 
            print(f"Vencedor: Candidato_{Candidate.Z.name}")
    
        print(f"Candidato_{Candidate.X.name} recebeu {counter_candidate_x} voto(s).")    
        print(f"Candidato_{Candidate.Y.name} recebeu {counter_candidate_y} voto(s).")
        print(f"Candidato_{Candidate.Z.name} recebeu {counter_candidate_z} voto(s).")
        print(f"Houve {counter_white} voto(s) em branco.")
        print(f"Houve {counter_null} voto(s) nulo(s).")
    
    except ValueError:
        print('Vote novamente!')
    
