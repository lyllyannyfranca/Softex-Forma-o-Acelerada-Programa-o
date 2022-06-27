#include <stdio.h>
#include <stdlib.h>

void printArray(int arr[], int size) {
	printf("Array: {");
    for(int i = 0; i < size; i++) 
    {
        printf("%d", (int) arr[i]);
        if (i == size - 1) {
            printf("}\n");
        } else {
            printf(", ");
        }
    }
}

int main()
{
    int size;
    int *ptr;
    
    printf("Informe um tamanho para o vetor: ");
    scanf("%d", &size);
    
    //ponteiro alocado vetor de inteiros com 5 posicoes
    ptr = (int *) malloc(size * sizeof(int));
    
    //preenchimento do vetor com multiplos de 5
    for(int j = 0; j < size; j++) {
        ptr[j] = (j+1) * size;
    }
    
    //Impressao dos valores
    printArray(ptr, size);
    size = 22;
    
    //Realocacao do ponteiro para vetor de inteiros agora com 22 posicoes com valores inseridos pelo usuario
    ptr = (int *) realloc(NULL, size * sizeof(int));
    for (int j = 0; j < size; j++) 
    {
        printf("Informe um numero para a posicao [%d]\n", j);
        scanf("%d",&ptr[j]);
        if (j == size - 1) 
            printf("\n");
    }
    
    //Impressao do novo array
    printArray(ptr, size);
    
    //Liberado espaço de memoria alocado para ptr (ponteiro).
    free(ptr);
    
    return 0;
}