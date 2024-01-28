#include <stdio.h>
int main(){
	int a, resto;
	printf("digite um numero inteiro: ");
	scanf("%d",&a);
	resto = a % 2;
	//saida processada
	if(resto){
		printf("impar");
	}else{
		printf("par");
	}
	return 0;
}
