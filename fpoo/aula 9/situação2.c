#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	
	int numcam;
	char cidade[15];
	
	printf("digite o nome da cidade: ");
	gets(cidade);
	printf("Nº de candidatos: ");
	scanf("%d", &numcam);
	
	char candidatos[numcam][15];
	float votos[numcam], brancos, nulos, votoscam, votosvalidos, campor[numcam], brancopor, eleito, troca;
	int i, j;
	
	printf("\n");
	
	for(i = 0; i <= numcam - 1; i++){
		printf("digite o nome do %dº candidato: ", i + 1);
		scanf("%s", &candidatos[i]);
		
		printf("digite o total de votos de %s: ", candidatos[i]);
		scanf("%f", &votos[i]);
		
		printf("\n");
	}
	
	printf("digite os o tatal de votos brancos: ");
	scanf("%f", &brancos);
	printf("digite os o tatal de votos nulos: ");
	scanf("%f", &nulos);
	
	for(i = 0; i <= numcam - 1; i++){
		votoscam += votos[i];
	}
	
	votosvalidos = votoscam + brancos;
	
	printf("\n");
	
	if(votosvalidos > nulos){
		printf("a eleição foi válida:\nvotos válidos: %.2f\nvotos invalidos: %.2f\n", votosvalidos, nulos);
	}else{
		printf("a eleição foi inválida:\nvotos válidos: %.2f\nvotos invalidos: %.2f\n", votosvalidos, nulos);
	}
	
	printf("\n");
	
	for(i = 0; i <= numcam; i++){
		campor[i] = votos[i] * 100 / votosvalidos ;
	}
	
	for(i = 0; i <= numcam - 1; i++){
		printf("porcentagem de votos do candidato %s: %.2f\n", candidatos[i], campor[i]);
	}
	
	brancopor = (brancos * 100) / votosvalidos;
	printf("porcentagem de votos brancos: %.2f", brancopor);
	
	eleito = (votosvalidos / 2) + 1;
	
	printf("\n");
	
	for(i = 0; i <= numcam; i++){
		if(votos[i] >= eleito){
			printf("o candidato %s foi eleito!", candidatos[i]);
		}
	}
	
	for(i = 0; i <= numcam; i++){
		for(j = 0; j < numcam - 1; j++){
			if(votos[j] < votos[j + 1]){
				troca = votos[j + 1];
				votos[j + 1] = votos[j];
				votos[j] = troca;
			}
		}
	}
	
	printf("\n");
	
	if(votos[0] < eleito && votosvalidos < 200000){
		printf("o candidato %s foi eleito!", candidatos[0]);
	}else{
		printf("os candidatos %s e %s vão para o 2º turno!", candidatos[0], candidatos[1]);
	}
	
	return 0;
}
