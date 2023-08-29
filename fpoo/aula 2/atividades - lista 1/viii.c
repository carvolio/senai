#include <stdio.h>
/*
Desenvolva um programa que leia o raio (cm) e a altura (cm) de um cilindro. 
Calcule e mostre a área (cm2) e o volume (cm3) do cilindro
*/
int main(){
	int a;
	int b;
	int c;
	int d;
	printf("digite quantos centimetros tem o raio do cilindro:");
	scanf("%d",&a);
	printf("digite quantos centimetros tem a altura do cilindro:");
	scanf("%d",&b);
	c = 2 * 3 * a * (a + b);//considerando Pi = 3
	d = 3 * (a * a) * b;
	printf("a area do cilindro e %dcm2 e o volume %dcm3",c,d);
	return 0;
}
