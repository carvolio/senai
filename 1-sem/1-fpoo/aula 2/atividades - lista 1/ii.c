#include <stdio.h>
/*
Desenvolva um programa que leia a velocidade de um carro (km/h) 
e a distância a ser percorrida (km) por ele. Calcule e apresente na 
tela, quanto tempo (horas) será necessário para o carro percorrer a 
distância informada
*/
int main(){
	int x;
	int y;
	int z;
	//entrada
	printf("digite a velocidade do carro em km/h:");
	scanf("%d",&x);
	printf("digite a distancia a ser percorrida em km:");
	scanf("%d",&y);
	//processamento
	z = y / x;
	//saída
	printf("são %d h para percorrer a distancia",z);
	return 0;
}
