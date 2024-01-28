#include <stdio.h>
/*
Desenvolva um programa que leia um número ”n” inteiro, positivo e diferente de zero 
e apresente na tela: n – 1, e também n + 1
*/
int main(){
	int n;
	int x;
	int y;
	printf("digite um numero inteiro, positivo que nao seja 0:");
	scanf("%d",&n);
	x = n - 1;
	y = n + 1;
	printf("%d - 1 = %d \n%d + 1 = %d",n,x,n,y);
	return 0;
}
