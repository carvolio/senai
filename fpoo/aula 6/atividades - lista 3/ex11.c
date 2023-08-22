#include <stdio.h>
/*
Escreva um programa que leia 5 números inteiros em qualquer ordem e exiba na tela ao final, os cinco números em ordem crescente
*/
int main(){
	
	int i, nu1, nu2, nu3, nu4, nu5, troca;
	
	printf("digite 5 numeros inteiros com espaco: ");
	scanf("%d %d %d %d %d", &nu1, &nu2, &nu3, &nu4, &nu5);
	
	for(i = 1; i <= 5; i++){

		if(nu1 > nu2){
			troca = nu1;
			nu1 = nu2;
			nu2 = troca;
		}
		if(nu2 > nu3){
			troca = nu2;
			nu2 = nu3;
			nu3 = troca;
		}
		if(nu3 > nu4){
			troca = nu3;
			nu3 = nu4;
			nu4 = troca;
		}
		if(nu4 > nu5){
			troca = nu4;
			nu4 = nu5;
			nu5 = troca;
		}
		
	}
	
	printf("os numeros em ordem crescente: %d %d %d %d %d",nu1,nu2,nu3,nu4,nu5);
	
	return 0;
}
