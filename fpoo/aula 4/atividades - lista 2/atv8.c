#include <stdio.h>
/*
Escreva um programa que leia dois números inteiros e determine qual é o maior e o menor
*/ 
int main(){
	int x, y;
	printf("digite 2 numeros inteiros com espaco: ");
	scanf("%d %d",&x,&y);
	if(x > y){
		printf("o numero %d e o maior e o %d o menor!",x,y);
	}else{
		printf("o numero %d e o maior e o %d o menor!",y,x);
	}
	return 0;
}
