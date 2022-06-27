#include <stdio.h>

void insertionSort(int arr[], int size) 
{
    int i, j, aux;
    for (i = 1; i < size; i++) 
    {
        aux = arr[i];
        j = i - 1;
        while ( (j >=0) && (aux < arr[j]) ) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = aux;
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
    int arr[] = {60, 11, 5, 3, 31, 7, 55, 1, 29, 17, 13, 19, 21, 23, 45, 27, 33, 35, 37, 39, 41, 43, 25, 47, 51, 53, 9, 57, 59, 15};
    int size = sizeof(arr)/sizeof(arr[0]);
    printArray(arr, size);
    insertionSort(arr, size);
    printArray(arr, size);
}