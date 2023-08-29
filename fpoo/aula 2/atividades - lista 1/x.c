#include <stdio.h>
/*
Desenvolva um programa que leia o nome de uma cidade,
o número total de eleitores e o número total de votos
apurados na última eleição. O programa deverá 
calcular e exibir a porcentagem de participação dos 
eleitores desta cidade na última eleição
*/
int main(){
	char a[10];
	int b;
	int c;
	int d;
	printf("digite o nome da cidade:");
	scanf("%s",&a);
	printf("digite o numero total de eleitores:");
	scanf("%d",&b);
	printf("digite o numero total de votos apurados na ultima eleicao:");
	scanf("%d",&c);
	d = (c * 100) / b;
	printf("a porcentagem de participacao dos eleitores na cidade %s e: %d",a,d);
	return 0;
}
