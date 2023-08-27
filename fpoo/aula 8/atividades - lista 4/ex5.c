#include <stdio.h>
#include <locale.h>
#include <string.h>

/*
Desenvolva um programa que leia o nome de 5 cidades, seu respectivo número total de eleitores e o total de votos 
apurados na última eleição. O programa deverá calcular e exibir a porcentagem de participação dos eleitores na 
eleição para 5 cidades
*/

int main(){
	setlocale(LC_ALL,"");
	
	char cidade[5][15];
	float eleitores[5], votos[5], participacao[5];
	int i;
	
	for(i = 0; i < 5; i++){
		printf("digite o nome da %dª cidade: ", i + 1);
		gets(cidade[i]);
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("digite o número total de eletores de %s: ", cidade[i]);
		scanf("%f", &eleitores[i]);
		
		printf("digite o número total de votos apurados na última eleição de %s: ", cidade[i]);
		scanf("%f", &votos[i]);
		
		printf("\n");
	}
	
	for(i = 0; i < 5; i++){
		participacao[i] = (votos[i] * 100) / eleitores[i];
		
		printf("porcentagem de participação dos eleitores na eleição de %s: %.2f\n", cidade[i], participacao[i]);
	}
	
	
	return 0;
}
