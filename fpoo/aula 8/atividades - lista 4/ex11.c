#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#include <time.h>

/*
Crie um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 100, Localize um valor informado pelo 
usuário dentro do vetor. Ex: 25 41 8 7 13 18 4 1 7 3, valor informado 13, está na posição 4 do vetor
*/

int main(){
	setlocale(LC_ALL,"");
	
	int nu[10], numenor = 0, numaior = 100, i, nuinformado, posicao;
	
	srand(time(NULL));
	
	for(i = 0; i < 10; i++){
		nu[i] = numenor + rand() % (numaior - numenor + 1);
	}
	
	for(i = 0; i < 10; i++){
		printf("%d ", nu[i]);
	}
	
	printf("\n");
	printf("\n");
	printf("informe um valor dentro do vetor: ");
	scanf("%d", &nuinformado);
	
	for(i = 0; i < 10; i++){
		if(nuinformado == nu[i]){
			posicao = i + 1;
		}
	}
	
	printf("\n");
	printf("o valor informado está na posição: %d", posicao);
	
	return 0;
}
