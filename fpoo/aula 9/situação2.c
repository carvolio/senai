#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	
	float numcam;
	char cidade[15];
	
	printf("digite o nome da cidade: ");
	gets(cidade);
	printf("Nº de candidatos: ");
	scanf("%f", &numcam);
	
	char candidatos[10][15];
	float votos[10], brancos, nulos, votoscam, votosvalidos, campor[10], brancopor;
	int i;
	
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
		votos[i] += votos[i + 1];
	}
	
	if(numcam > 0){
		votoscam = votos[0];
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
		campor[i] = (votos[i] * 100) / votosvalidos;
	}
	
	for(i = 0; i <= numcam - 1; i++){
		printf("porcentagem de votos do candidato %s: %.2f\n", candidatos[i], campor[i]);
	}
	
	brancopor = (brancos * 100) / votosvalidos;
	printf("porcentagem de votos brancos: %.2f", brancopor);
	
	
	
	return 0;
}
