#include <stdio.h>
/*
Escreva um programa que leia 5 números inteiros em qualquer ordem e 
exiba na tela ao final, os cinco números em ordem crescente
*/
int main(){
	int a, b, c, d, e, temp;
	printf("digite 5 numeros inteiros com espaco: ");
	scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
	if(a > b){
		temp = a;
		a = b;
		b = temp;
	}
	if(b > c){
		temp = b;
		b = c;
		c = temp;
	}
	if(c > d){
		temp = c;
		c = d;
		d = temp;
	}
	if(d > e){
		temp = d;
		d = e;
		e = temp;
	}
	if(a > b){
		temp = a;
		a = b;
		b = temp;
	}
	printf("%d %d %d %d %d",a,b,c,d,e);
	return 0;
}
