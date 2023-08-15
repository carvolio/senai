#include <stdio.h>
/*
Desenvolva um programa que leia 6 números inteiros e exiba na tela ao final, o maior número que foi digitado pelo usuáriou
*/
int main(){
	int a, b, c, d, e, f;
	printf("digite 6 numeros inteiro com espaco: ");
	scanf("%d %d %d %d %d %d",&a,&b,&c,&d,&e,&f);
	if(a >= b && a >= c && a >= d && a >= e && a >= f){
		printf("o maior numero digitado foi: %d",a);
	}else if(b >= a && b >= c && b >= d && b >= e && b >= f){
		printf("o maior numero digitado foi: %d",b);
	}else if(c >= a && c >= b && c >= d && c >= e && c >= f){
		printf("o maior numero digitado foi: %d",c);
	}else if(d >= a && d >= c && d >= b && d >= e && d >= f){
		printf("o maior numero digitado foi: %d",d);
	}else if(e >= a && e >= c && e >= d && e >= b && e >= f){
		printf("o maior numero digitado foi: %d",e);
	}else(f >= a && f >= c && f >= d && f >= e && f >= b);{
		printf("o maior numero digitado foi: %d",f);
	}	
	return 0;
}
