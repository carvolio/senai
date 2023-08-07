#include <stdio.h>
/*
Desenvolva um programa que leia 6 números inteiros e exiba na tela ao final, o maior número que foi digitado pelo usuáriou
*/
int main(){
	int a, b, c, d, e, f;
	printf("digite 6 numeros inteiro com espaco: ");
	scanf("%d %d %d %d %d %d",&a,&b,&c,&d,&f);
	if(a >= b && a >= c && a >= d && a >= e && a >= f){
		printf("o maior numero digitado foi: %d",a)
	}
	return 0;
}
