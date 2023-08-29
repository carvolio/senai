#include <stdio.h>
/*
Sabendo-se que a velocidade de cruzeiro de um avião 747-300 é de 900 km/h, 
faça um programa que leia uma distância (km), calcule e apresente na tela, 
quanto tempo (horas) será necessário para um 747-300 sobrevoar a distância informada
*/
int main(){
	int x;
	int y;
	int z;
	printf("digite quantos quilometros faltam para o aviao 747-300 sobrevoar a area:");
	scanf("%d",&x);
	y = 900;
	z = x / y;
	printf("faltam %dh para o 747-300 sobrevoar a distancia informada",z);
	return 0;
}
