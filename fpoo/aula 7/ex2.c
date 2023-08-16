#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	char nome[50];
	float peso, altura, imc;
	int x;
	do{
		printf("digite seu nome: ");
		scanf("%s",&nome);
		printf("digite seu peso: ");
		scanf("%f",&peso);
		printf("digite sua altura: ");
		scanf("%f",&altura);
		imc = peso / (altura * altura);
		if(imc <= 18.5){
			printf("(imc = %.2f) %s esta abaixo do pesso\n",imc ,nome);
		}else if(imc >= 18.6 && imc < 24.9){
			printf("(imc = %.2f) %s esta com o peso ideal\n",imc ,nome);
		}else if(imc >= 25 && imc < 29.9){
			printf("(imc = %.2f) %s esta levemente acima do peso\n",imc ,nome);
		}else if(imc >= 30 && imc < 34.9){
			printf("(imc = %.2f) %s esta com obesidade grau 1\n",imc ,nome);
		}else if(imc >= 35 && imc < 39.9){
			printf("(imc = %.2f) %s esta com obesidade grau 2 (severa)\n",imc ,nome);
		}else if(imc >= 40){
			printf("(imc = %.2f) %s esta com obesidade grau 3 (morbida)\n",imc ,nome);
		}
		printf("se deseja voltar ao inicio digite 1: ");
		scanf("%d",&x);
	}while(x = 1);
	return 0;
}
