#include <stdio.h>
/*
Faça um programa que solicite que o usuário digite dois valores inteiros diferentes e imprima todos os valores entre o um número e o outro
*/
int main(){
	int a, b;
	printf("digite dois numeros inteiros com espaco: ");
	scanf("%d %d", &a, &b);
	if(a < b){
		for(a = a; a <= b; a++){
			printf("%d\n",a);
		}
	}else{
		for(a = a; a >= b; a--){
			printf("%d\n",a);
		}
	}
	return 0;
}
