#include <stdio.h>
#include <locale.h>
#include <string.h>

/*
Crie um programa com dois vetores numéricos de dimensão 5 com valores informados pelo usuário. 
Apresente a soma do primeiro vetor com o inverso do segundo
*/

int main(){
	setlocale(LC_ALL,"");
	
	int vetor1[5], vetor2[5], soma[5], i;
	
	for(i = 0; i < 5; i++){
		printf("digite o %dº valor do vetor 1: ", i + 1);
		scanf("%d", &vetor1[i]);
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("digite o %dº valor do vetor 2: ", i + 1);
		scanf("%d", &vetor2[i]);
	}
	
	printf("\n");
	
	printf("a soma do vetor 1 com o inverso do vetor 2:\n");
	for(i = 0; i < 5; i++){
		soma[i] = vetor1[i] + vetor2[4 - i];
		
		printf("%dª soma: %d\n", i + 1, soma[i]);
	}
	
	
	return 0;
}
