#include <stdio.h>
/*
Faça um programa que solicite que o usuário digite um valor inteiro, positivo e imprima todos os valores entre 0 e o número digitado de 2 em 2
*/
int main(){
	int i, a;
	printf("digite um valor inteiro e positivo: ");
	scanf("%d", &a);
	for(i = 0; i < a; i+=2){
		printf("%d\n",i);
	}
	return 0;
}

