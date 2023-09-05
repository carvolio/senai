#include <stdio.h>
#include <locale.h>
#include <string.h>

/*
Desenvolva um programa que leia o nome de 5 times de futebol, o número de vitórias e o número de empates de cada time.
O programa deverá calcular e apresentar na tela, o nome dos times e o total de pontos de cada um e a ordem de 
classificação decrescente. Lembrando que a vitória vale 3 pontos e o empate vale 1 ponto.
*/

int main(){
	setlocale(LC_ALL,"");
	
	char time[5][15], trocaTime[10];
	int vitoria[5], empate[5], i, pontos[5], trocaPontos, j, maior;
	
	for(i = 0; i < 5; i++){
		printf("digite o nome do %dº time: ",i + 1);
		gets(time[i]);
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("digite o número de vitórias do %s: ",time[i]);
		scanf("%d", &vitoria[i]);
		
		printf("digite o número de empates do %s: ",time[i]);
		scanf("%d", &empate[i]);
	}
	
	
	for(i = 0; i < 5; i++){
		pontos[i] = (vitoria[i] * 3) + empate[i];
	}
	
	
	for(i = 0; i < 5; i++){
		maior = i;
		
		for(j = i; j < 5; j++){
			if(pontos[j] > pontos[maior]){
				maior = j;
			}
		}
		
		trocaPontos = pontos[i];
		pontos[i] = pontos[maior];
		pontos[maior] = trocaPontos;
		
		strcpy(trocaTime, time[i]);
		strcpy(time[i], time[maior]);
		strcpy(time[maior], trocaTime);
	}
	
	printf("\n");
	
	printf("a ordem de classificação decrescente pelo total de pontos:\n");
	for(i = 0; i < 5; i++){
		printf("o time %s ficou em %dº lugar com %d pontos!\n",time[i], i + 1, pontos[i]);
	}
	
	return 0;
}
