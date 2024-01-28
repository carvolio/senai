#include <stdio.h>
/*
Faça um programa que imprima na tela a soma dos valores inteiros entre 0 e 100
*/
int main(){
	int i, y, x;
	for(i = 1; i < 99; i++){
		x = i + i + 1;
		y = i + 1;
		printf("%d + %d = %d\n",i,y,x);
	}
	return 0;
}

