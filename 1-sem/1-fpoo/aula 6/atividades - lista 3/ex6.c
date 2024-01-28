#include <stdio.h>
/*
Faça um programa que solicite que o usuário digite um valor inteiro, positivo e imprima todos os valores 
ímpares entre 0 e o número digitado
*/
int main(){
	int i, x;
	printf("digite um numero inteiro e positivo: ");
	scanf("%d", &x);
	for(i = 1; i <= x; i+=2){
		printf("%d\n",i);
	}
	return 0;
}
