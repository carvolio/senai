#include <stdio.h>
/*
Desenvolva um programa que leia três variáveis (a, b, c) e resolva 
a expressão: ( a + b ) / c
*/
int main (){
	int a;
	int b;
	int c;
	int x;
	//entrada
	printf("digite a variavel a:");
	scanf("%d",&a);
	printf("digite a variavel b:");
	scanf("%d",&b);
	printf("digite a variavel c:");
	scanf("%d",&c);
	//processos
	x = (a + b) / c;
	//saida
	printf("(%d + %d) / %d = %d",a,b,c,x);
	return 0;
}
