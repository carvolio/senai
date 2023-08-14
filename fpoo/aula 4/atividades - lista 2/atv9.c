#include <stdio.h>
/*
Desenvolva um algortimo que faço o cálculo do reajuste salarial do funcionário, baseado nos seguintes parâmetros:
15% de aumento : 1.500,00 <= salario Atual < 1.750,00
12% de aumento : 1.750,00 <= salario Atual < 2.000,00
9% de aumento : 2.000,00 <= salario Atual < 3.000,00
6% de aumento : salario Atual >= 3.000,00
*/
int main(){
	float sal, aum1, aum2, aum3, aum4;
	printf("qual o salario do funcionario: ");
	scanf("%f",&sal);
	if(sal < 1500.00){
		printf("nao tera reajuste!");
	}else if(sal >= 1500.00 && sal < 1750.00){
		aum1 = (sal / 100)* 115;
		printf("com o reajuste de 15 porcento o salario sera de: %.2f",aum1);
	}else if(sal >= 1750.00 && sal < 2000.00){
		aum2 = (sal / 100)* 112;
		printf("com o reajuste de 12 porcento o salario sera de: %.2f",aum2);
	}else if(sal >= 2000.00 && sal < 3000.00){
		aum3 = (sal / 100)* 109;
		printf("com o reajuste de 9 porcento o salario sera de: %.2f",aum3);
	}else(sal >= 3000.00);{
		aum4 = (sal / 100)* 106;
		printf("com o reajuste de 6 porcento o salario sera de: %.2f",aum4);
	}
	return 0;
}
