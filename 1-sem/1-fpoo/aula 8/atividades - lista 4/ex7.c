#include <stdio.h>
#include <locale.h>

/*
Escreva um programa que leia 5 números inteiros em qualquer ordem e exiba na tela ao final, 
os cinco números em ordem decrescente
*/

int main(){
	setlocale(LC_ALL,"");
	
	int nu[5], i, troca, j;
	
	for(i = 0; i < 5; i++){
		printf("digite um número inteiro: ");
		scanf("%d", &nu[i]);
	}

	for(i = 0; i < 5; i++){
		for(j = 0; j < 5 - 1; j++){
			if(nu[j] < nu[j + 1]){
				troca = nu[j + 1];
				nu[j + 1] = nu[i];
				nu[i] = troca;
			}
		}
	}
	
	printf("\n");
	
	printf("ordem descresente: ");
	for(i = 0; i < 5; i++){
		printf("%d ", nu[i]);
	}
	
	return 0;
}
