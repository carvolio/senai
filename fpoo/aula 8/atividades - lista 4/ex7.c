#include <stdio.h>
#include <locale.h>

/*
Escreva um programa que leia 5 números inteiros em qualquer ordem e exiba na tela ao final, 
os cinco números em ordem decrescente
*/

int main(){
	setlocale(LC_ALL,"");
	
	int nu[5], i, troca;
	
	for(i = 0; i < 5; i++){
		printf("digite um número inteiro: ");
		scanf("%d", &nu[i]);
	}

	if(nu[0] > nu[1]){
		troca = nu[0];
		nu[0] = nu[1];
		nu[1] = troca;
	}
	if(nu[1] < nu[2]){
		troca = nu[1];
		nu[1] = nu[2];
		nu[2] = troca;
	}
	if(nu[2] < nu[3]){
		troca = nu[2];
		nu[2] = nu[3];
		nu[3] = troca;
	}
	if(nu[3] < nu[4]){
		troca = nu[3];
		nu[3] = nu[4];
		nu[4] = troca;
	}
	if(nu[4] > nu[0]){
		troca = nu[4];
		nu[4] = nu[0];
		nu[0] = troca;
	}
	
	printf("\n");
	
	printf("ordem descresente: ");
	for(i = 0; i < 5; i++){
		printf("%d ", nu[i]);
	}
	
	return 0;
}
