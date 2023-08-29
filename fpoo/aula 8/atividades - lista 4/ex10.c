#include <stdio.h>
#include <locale.h>

/*
Utilizando apenas um vetor de tamanho 6, troque os valores de maneira inversa, ex: 2 4 6 8 10 11 inverso 11 10 8 6 4 2
*/

int main(){
	setlocale(LC_ALL,"");
	
	int vetor[6], i, troca, j = 5, k = 6;
	
	for(i = 0; i < 6; i++){
		printf("digite o %dº número do vetor: ", i + 1);
		scanf("%d", &vetor[i]);
	}
	
	for(i = 0; i < 6; i++){
		vetor[i] = vetor[j];
		vetor[j] = vetor[i + k];
		j--;
		k--;
	}
	
	printf("\n");
	
	for(i = 0; i < 6; i++){
		printf("%d\n", vetor[i]);
	}
	
	return 0;
}
