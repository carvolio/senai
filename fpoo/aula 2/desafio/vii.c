#include <stdio.h>
/*
Um caminhão consegue transportar 18 toneladas de laranjas em uma viagem que 
faz entre a fazenda e a fábrica de suco de laranja. Um alqueire de terra produz 
em média 250 toneladas de laranjas. Faça um programa que leia quantos caminhões 
e quantos alqueires uma fazenda produtora de laranjas possui, calcule e apresente 
na tela quantas viagens de caminhão serão necessárias para transportar toda a 
colheita de laranjas
*/
int main(){
	int x;
	int y;
	int z;
	printf("digite quantos caminhoes a fazenda de laranja possui:");
	scanf("%d",&x);
	printf("digite quantos alqueires a fazenda de laranja possui:");
	scanf("%d",&y);
	z = ((y * 250) / (x * 18)) + 1; // +1 pois o resultado não é numero redondo, ex: 2,45, então será necessária mais uma viagem para os 0,45, dando 3 viagens
	printf("serao necessarias %d viagens para levar toda a colheita da fazenda a fabrica de suco de laranja",z);
	return 0;
}
