#include <stdio.h>
#include <locale.h>
#include <string.h>

/*
Desenvolva um programa que leia o nome e o preço de 5 mercadorias. Se o preço for menor do que 1000 terá um aumento 
de 5% no preço da mercadoria, senão o aumento será de 7%. Mostrar o nome das mercadorias e o seu novo preço
*/

int main(){
	setlocale(LC_ALL,"");
	
	char nome[5][15];
	float preco[5], novop[5];
	int i;
	
	for(i = 0; i < 5; i++){
		printf("digite o nome da %dª mercadoria: ", i + 1);
		gets(nome[i]);
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("digite o preço da %s mercadoria: ", nome[i]);
		scanf("%f", &preco[i]);
	}
	
	for(i = 0; i < 5; i++){
		if(preco[i] < 100){
			novop[i] = preco[i] * 1.05;
		}else{
			novop[i] = preco[i] * 1.07;
		}
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("a mercadoria %s agora custa %.2f!\n", nome[i], novop[i]);
	}
	
	return 0;
}
