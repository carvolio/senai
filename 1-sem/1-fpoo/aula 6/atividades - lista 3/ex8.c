#include <stdio.h>
/*
Faça um programa que peça para o usuário digitar um número inteiro positivo e calcule o fatorial deste número
*/
int main(){
	int a, i, fat;
	printf("digite um numero inteiro e positivo: ");
	scanf("%d", &a);
	fat = 1;
	for(i = a; i >= 1; i--){
		fat *= i;
	}
	printf("o fatorial de %d e: %d",a,fat);
	return 0;
}
