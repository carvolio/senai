#include <stdio.h>
#include <locale.h>

/*
Utilizando apenas um vetor de tamanho 6, troque os valores de maneira inversa, ex: 2 4 6 8 10 11 inverso 11 10 8 6 4 2
*/

int main(){
	setlocale(LC_ALL,"");
	
	int vetor[6], i, troca;
	int tamanho = sizeof(vetor) / sizeof(vetor[0]);
	
	for(i = 0; i < 6; i++){
		printf("digite o %dº número do vetor: ", i + 1);
		scanf("%d", &vetor[i]);
	}
	
	for(i = 0; i < tamanho / 2; i++){
		troca = vetor[i];
		vetor[i] = vetor[tamanho - 1 - i];
		vetor[tamanho - 1 - i] = troca;
	}
	
	printf("\n");
	
	printf("ordem inversa:");
	for(i = 0; i < 6; i++){
		printf(" %d", vetor[i]);
	}
	
	return 0;
}
