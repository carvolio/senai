#include <stdio.h>
#include <locale.h>
#include <string.h>

/*
Desenvolva um programa que leia o nome e o preço de 5 mercadorias, apresente na tela o mais caro e o mais barato
*/

int main(){
	setlocale(LC_ALL,"");
	
	char nome[5][15];
	float preco[5], maior, menor;
	int i;
	
	for(i = 0; i < 5; i++){
		printf("digite o nome da %dª mercadoria: ", i + 1);
		gets(nome[i]);
	}
	
	printf("\n");
	
	for(i = 0; i < 5; i++){
		printf("digite o preço de %s: ", nome[i]);
		scanf("%f", &preco[i]);
	}
	
	printf("\n");
	
	if(preco[0] > preco[1] && preco[0] > preco[2] && preco[0] > preco[3] && preco[0] > preco[4]){
		printf("o maior valor é da mercadoria %s %.2f\n",nome[0], preco[0]);
	}if(preco[1] > preco[2] && preco[1] > preco[3] && preco[1] > preco[4] && preco[1] > preco[0]){
		printf("o maior valor é da mercadoria %s %.2f\n",nome[1], preco[1]);
	}if(preco[2] > preco[3] && preco[2] > preco[4] && preco[2] > preco[0] && preco[2] > preco[1]){
		printf("o maior valor é da mercadoria %s %.2f\n",nome[2], preco[2]);
	}if(preco[3] > preco[4] && preco[3] > preco[0] && preco[3] > preco[1] && preco[3] > preco[2]){
		printf("o maior valor é da mercadoria %s %.2f\n",nome[3], preco[3]);
	}if(preco[4] > preco[0] && preco[4] > preco[1] && preco[4] > preco[2] && preco[4] > preco[3]){
		printf("o maior valor é da mercadoria %s %.2f\n",nome[4], preco[4]);
	}
	
	if(preco[0] < preco[1] && preco[0] < preco[2] && preco[0] < preco[3] && preco[0] < preco[4]){
		printf("o menor valor é da mercadoria %s %.2f\n",nome[0], preco[0]);
	}if(preco[1] < preco[2] && preco[1] < preco[3] && preco[1] < preco[4] && preco[1] < preco[0]){
		printf("o menor valor é da mercadoria %s %.2f\n",nome[1], preco[1]);
	}if(preco[2] < preco[3] && preco[2] < preco[4] && preco[2] < preco[0] && preco[2] < preco[1]){
		printf("o menor valor é da mercadoria %s %.2f\n",nome[2], preco[2]);
	}if(preco[3] < preco[4] && preco[3] < preco[0] && preco[3] < preco[1] && preco[3] < preco[2]){
		printf("o menor valor é da mercadoria %s %.2f\n",nome[3], preco[3]);
	}if(preco[4] < preco[0] && preco[4] < preco[1] && preco[4] < preco[2] && preco[4] < preco[3]){
		printf("o menor valor é da mercadoria %s %.2f\n",nome[4], preco[4]);
	}
	
	
	return 0;
}
