#importação da biblioteca do pandas e criado um apelido de pd
import pandas as pd

#leitura do arquivo com os dados
df = pd.read_csv('notas_alunos.csv')

#calculo da media dos alunos
average = (df['nota_1'] + df['nota_2'])/2

#atribuição da media calculada a uma nova coluna chamada media
df['media'] = average

#criação de nova coluna chamada situação e alocação na mesma dos valores REPROVADO ou APROVADO conforme retorno após teste lógico
df.loc[(df['faltas'] <= 5) | (df['media'] >= 7), 'situacao'] = "APROVADO"
df.loc[(df['faltas'] > 5) | (df['media'] < 7), 'situacao'] = "REPROVADO"

#uso das funcoes median() e max()
print(f"Maior número de faltas: {df['faltas'].max()}")
print(f"Média geral: {df['media'].median()}")
print(f"Maior média: {df['media'].max()}")

#salva o novo dataframe em um novo arquivo
df.to_csv('alunos_situacao.csv', index=False)







