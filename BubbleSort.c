#include <stdio.h>

void bubbleSort(int arr[], int size) {
	
	int i, j, aux;
	 
	for(int i = 0; i < size; i++) 
	{
    	for (int j = 0; j < size - i - 1; j++) 
        {
            if (arr[j] > arr[j+1]) 
            {
                aux = 0;
                aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
	}
}

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

int main(void)
{
    int arr[] = {3, 5, 4, 1, 9, 8, 6, 7, 2, 10};
    int size = sizeof(arr)/sizeof(arr[0]);
    printArray(arr, size);
    bubbleSort(arr, size);
    printArray(arr, size);
}