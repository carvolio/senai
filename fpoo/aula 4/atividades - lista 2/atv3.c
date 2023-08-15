#include <stdio.h>
/*
Desenvolva um programa que calcule desconto de INSS de um funcionário, se o salário for menor ou igual a do que R$ 1212,00 reais será de 7,5%, 
se estiver entre R$ 1212,01 e 2427,35 será de 9%, se estiver entre R$ 2427,36 e R$ 3641,03 o desconto é 12%, 
se estiver entre R$ 3641,04 a R$ 7087,22 será de 14% e se for maior do que 7087,22 o teto que é o máximo cobrado 14% de 7087,22. 
Mostre o desconto e o valor do salário final.
*/
int main(){
	float a, b, c, d, e, ba, ca, da, ea;
	printf("qual e o salario do funcionario em R$: ");
	scanf("%f",&a);
	b = (a * 7.5) / 100;
	ba = a - ((a * 7.5) / 100);
	c = (a * 9) / 100;
	ca = a - ((a * 9) / 100);
	d = (a * 12) / 100;
	da = a - ((a * 12) / 100);
	e = (a * 14) / 100;
	ea = a - ((a * 14) / 100);
	if(a <= 1212.00){
		printf("com o desconto do INSS de %.2f R$ (7.5 porcento) o salario final fica: %.2f R$",b,ba);
	}else if(a > 1212.01 && a < 2427.35){
		printf("com o desconto do INSS de %.2f R$ (9 porcento) o salario final fica: %.2f R$",c,ca);
	}else if(a > 2427.36 && a < 3641.03){
		printf("com o desconto do INSS de %.2f R$ o (12 porcento) salario final fica: %.2f R$",d,da);
	}else{
		printf("com o desconto do INSS de %.2f R$ (14 porcento) o salario final fica: %.2f R$",e,ea);
	}
	return 0;
}
