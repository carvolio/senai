#include <stdio.h>
/*
Faça um programa que peça para o usuário digitar um número inteiro positivo e calcule o fatorial deste número
*/
int main(){
	int a, b, c, i;
	printf("digite um numero inteiro e positivo: ");
	scanf("%d", &a);
	i = 1;
	while(i <= a){
		b = a * (a - i);
		c = b * b;
		printf("fatorial = %d\n",c);
		i++;
	}
	return 0;
}
