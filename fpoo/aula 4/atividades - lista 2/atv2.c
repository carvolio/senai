#include <stdio.h>
/*
Desenvolva um programa que leia o salário de um funcionário e o número de filhos. Se o salário for menor do que 2000 o funcionário receberá 
um salário família equivalente a 45 reais por filho. Apresente o salário final
*/
int main(){
	float a, b, c;
	printf("digite o salario do funcionario em R$: ");
	scanf("%f",&a);
	printf("digite o numero de filhos do funcionario: ");
	scanf("%f",&b);
	c = (45 * b) + a;
	if(a < 2000){
		printf("o salario final do funcionario sera de: %.2f R$",c);
	}else{
		printf("o salario continuara sem mudanca: %.2f R$",a);
	}
	return 0;
}
