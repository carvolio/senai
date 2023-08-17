#include <stdio.h>
/*
Faça um programa que imprima na tela a soma dos valores inteiros entre 0 e 100
*/
int main(){
	int i;
	for(i = 1; i < 100; i+=i){
		i = i + i;
		printf("%d\n",i);
	}
	return 0;
}

